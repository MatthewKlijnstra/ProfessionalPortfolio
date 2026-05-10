
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Update Nav State
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.querySelector('a').getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Skill Modal Logic ---
    const skillTags = document.querySelectorAll('.skills-grid .tech-tag');
    const skillModal = document.getElementById('skill-modal');

    // Check if skill modal exists on this page
    if (skillModal) {
        const modalTitle = document.getElementById('skill-modal-title');
        const modalDesc = document.getElementById('skill-modal-desc');
        const modalCloseBtn = document.querySelector('.skill-modal-close');

        // Helper function to close modal
        const closeModal = () => {
            skillModal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.paddingRight = ''; // Remove scrollbar compensation
        };

        // Open Modal
        skillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const name = tag.getAttribute('data-skill-name') || tag.textContent;
                const desc = tag.getAttribute('data-skill-desc') || "No description provided.";

                modalTitle.textContent = name;
                modalDesc.textContent = desc;

                // Calculate scrollbar width to prevent layout shift
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.style.overflow = 'hidden'; // Prevent background scrolling

                skillModal.classList.add('active');
            });
        });

        // Close Modal via Button
        modalCloseBtn.addEventListener('click', closeModal);

        // Close Modal via Background Click
        skillModal.addEventListener('click', (e) => {
            // If the click is on the overlay itself (not the content)
            if (e.target === skillModal) {
                closeModal();
            }
        });

        // Close Modal via Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && skillModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // --- Discord Copy Logic ---
    const discordCard = document.querySelector('.discord-card');
    if (discordCard) {
        discordCard.addEventListener('click', async () => {
            const discordId = discordCard.getAttribute('data-discord-id');
            const discordText = discordCard.querySelector('.discord-tag');

            try {
                await navigator.clipboard.writeText(discordId);

                // Visual feedback
                const originalText = discordText.textContent;
                discordText.textContent = `Copied: ${discordId}`;
                discordCard.classList.add('copied');

                // Reset after 2 seconds
                setTimeout(() => {
                    discordText.textContent = originalText;
                    discordCard.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                discordText.textContent = 'Failed to copy!';
                setTimeout(() => {
                    discordText.textContent = 'Copy ID to clipboard';
                }, 2000);
            }
        });
    }

    // --- Welcome Toast Logic ---
    const welcomeToast = document.getElementById('welcome-toast');
    if (welcomeToast) {
        // Show after a short delay
        setTimeout(() => {
            welcomeToast.classList.add('show');
        }, 1500);

        // Hide function
        const hideToast = () => {
            if (welcomeToast.classList.contains('show')) {
                welcomeToast.classList.remove('show');
                welcomeToast.classList.add('hide');
                // Remove listeners after hiding
                window.removeEventListener('scroll', hideToast);
                window.removeEventListener('click', hideToast);
            }
        };

        // Hide on scroll
        window.addEventListener('scroll', hideToast, { passive: true });
        
        // Hide on any click
        window.addEventListener('click', hideToast);
    }
});
