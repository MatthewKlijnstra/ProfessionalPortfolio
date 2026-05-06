// SubPage.JS
document.addEventListener('DOMContentLoaded', async () => {
    // 1. UI Setup
    const btnViewSource = document.getElementById('btn-view-source');
    const btnCloseSource = document.getElementById('btn-close-source');
    const sourcePanel = document.getElementById('source-panel');

    if (btnViewSource && sourcePanel) {
        btnViewSource.addEventListener('click', (e) => {
            e.preventDefault();
            sourcePanel.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnCloseSource && sourcePanel) {
        btnCloseSource.addEventListener('click', () => {
            sourcePanel.classList.remove('open');
            document.body.style.overflow = '';
        });
    }

    // Close panel when clicking outside of it
    document.addEventListener('click', (e) => {
        if (sourcePanel && sourcePanel.classList.contains('open')) {
            if (!sourcePanel.contains(e.target) && (!btnViewSource || !btnViewSource.contains(e.target))) {
                sourcePanel.classList.remove('open');
                document.body.style.overflow = '';
            }
        }
    });

    // 2. Dynamic Content Loading
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('project');

    if (!projectName) {
        document.getElementById('project-details-container').innerHTML = "<p>No project specified.</p>";
        return;
    }

    try {
        const response = await fetch(`Projects/${projectName}.md`);
        if (!response.ok) throw new Error("Project file not found");
        
        const mdText = await response.text();
        const parsedData = parseProjectData(mdText);
        
        if (parsedData) {
            populatePage(parsedData.data, parsedData.mainContent, parsedData.sourceContent);
        }
    } catch (error) {
        console.error("Error loading project:", error);
        document.getElementById('project-details-container').innerHTML = "<p>Error loading project details.</p>";
    }
});

function parseProjectData(mdText) {
    const yamlRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = mdText.match(yamlRegex);
    
    if (match) {
        const yamlPart = match[1];
        const contentPart = match[2];
        const data = {};
        
        let inList = false;
        let listKey = "";

        yamlPart.split('\n').forEach(line => {
            if (line.trim().startsWith('- ')) {
                if (inList) data[listKey].push(line.replace('- ', '').trim());
            } else if (line.includes(':')) {
                const index = line.indexOf(':');
                const key = line.slice(0, index).trim();
                const value = line.slice(index + 1).trim();
                
                if (value === "") {
                    inList = true;
                    listKey = key;
                    data[listKey] = [];
                } else {
                    inList = false;
                    data[key] = value;
                }
            }
        });
        
        let mainContent = contentPart;
        let sourceContent = "";
        
        if (contentPart.includes('---SOURCE---')) {
            const parts = contentPart.split('---SOURCE---');
            mainContent = parts[0];
            sourceContent = parts[1];
        }

        return { data, mainContent, sourceContent };
    }
    return null;
}

function populatePage(meta, mainMd, sourceMd) {
    // Basic Info
    document.title = `${meta.title || 'Project'} | Project Details`;
    if(meta.title) document.getElementById('dyn-title').textContent = meta.title;
    if(meta.tagline) document.getElementById('dyn-tagline').textContent = meta.tagline;
    if(meta.heroImage) document.getElementById('dyn-hero-img').src = meta.heroImage;
    if(meta.role) document.getElementById('dyn-role').textContent = meta.role;
    if(meta.timeline) document.getElementById('dyn-timeline').textContent = meta.timeline;
    if(meta.platform) document.getElementById('dyn-platform').textContent = meta.platform;

    // Tags
    if (meta.tags && meta.tags.length > 0) {
        const tagsContainer = document.getElementById('dyn-tags-container');
        tagsContainer.innerHTML = '';
        meta.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    // Buttons
    const viewSourceBtn = document.getElementById('btn-view-source');
    const downloadBtn = document.getElementById('dyn-download-btn');
    const githubLink = document.getElementById('dyn-github-link');
    
    if(viewSourceBtn && meta.sourceLink) {
        viewSourceBtn.style.display = 'inline-flex';
        viewSourceBtn.href = meta.sourceLink;
        if(githubLink) {
            githubLink.style.display = 'inline-flex';
            githubLink.href = meta.sourceLink;
        }
    } else if (viewSourceBtn) {
        viewSourceBtn.style.display = 'none';
        if(githubLink) githubLink.style.display = 'none';
    }

    if(downloadBtn && meta.downloadLink) {
        downloadBtn.style.display = 'inline-flex';
        downloadBtn.href = meta.downloadLink;
    } else if (downloadBtn) {
        downloadBtn.style.display = 'none'; // Hide if no download link
    }

    // Main Content
    if(typeof marked !== 'undefined') {
        const renderedMain = marked.parse(mainMd);
        document.getElementById('dyn-main-content').innerHTML = renderedMain;
        
        if (sourceMd.trim()) {
            const renderedSource = marked.parse(sourceMd);
            document.getElementById('dyn-source-content').innerHTML = renderedSource;
        } else {
            document.getElementById('dyn-source-content').innerHTML = "<p>No source details provided.</p>";
        }

        // Apply syntax highlighting to code blocks
        if (typeof hljs !== 'undefined') {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
    } else {
        document.getElementById('dyn-main-content').innerHTML = "<p>Error: Markdown parser not loaded.</p>";
    }

    // Gallery
    const gallerySection = document.getElementById('dyn-gallery-section');
    const galleryContainer = document.getElementById('dyn-gallery-container');
    
    if (meta.gallery && meta.gallery.length > 1) { // Show gallery only if multiple images
        galleryContainer.innerHTML = '';
        meta.gallery.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = "Project Screenshot";
            img.className = "gallery-img";
            galleryContainer.appendChild(img);
        });
        gallerySection.style.display = 'block';
    } else {
        gallerySection.style.display = 'none';
    }
}
