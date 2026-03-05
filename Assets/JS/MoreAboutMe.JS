// MoreAboutMe.JS - Logic for the Hexablock interaction and dynamic image carousel

const interestsData = {
    xr: {
        title: "Extended Reality (VR/AR)",
        desc: "My deepest passion lies in creating immersive worlds. Working primarily with Unity, the XR Interaction Toolkit, and Meta Quest, I love building mechanics that feel tactile and environments that transport the player completely.",
        images: ["Images/Projects/WhisSis/WhisSisMain.png", "Images/Projects/WhisSis/WhisSis1.png"] // Fallbacks since specific interest images may not exist yet
    },
    gamedev: {
        title: "Game Development",
        desc: "From the core gameplay loop to custom AI pathfinding, I thrive on the technical challenges of bringing a game to life. I focus on clean architecture, optimizing performance, and ensuring the game logic is solid and maintainable.",
        images: ["Images/Projects/DungeonShooter/DungeonShooterMain.png", "Images/Projects/LittleJumper/LittleJumperMain.png"]
    },
    hardware: {
        title: "Hardware Integration",
        desc: "I love pushing the boundaries of standard input. Integrating things like the bHaptics suit in VR or creating custom multi-platform input systems demonstrates my desire to bridge the gap between human and machine.",
        images: ["Images/Projects/Floors/FloorsMain.png"]
    },
    code: {
        title: "Clean Code & Architecture",
        desc: "Whether it's C# in Unity, Blueprints in Unreal 5, or building scalable web systems, I take pride in writing elegant code. I view programming not just as a tool, but as a craft.",
        images: ["Images/Projects/VRRecording/VRRecordingMain.png"]
    },
    art3d: {
        title: "3D Rendering & Tech Art",
        desc: "I have a keen eye for optimizing lighting and manipulating shaders to achieve maximum performance without sacrificing visual fidelity. I enjoy the intersection where art and heavy technical math meet.",
        images: ["Images/Projects/CoastalCookout/CoastalCookoutMain.png"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hex-interactive');
    const titleEl = document.getElementById('interest-title');
    const descEl = document.getElementById('interest-desc');
    const carouselContainer = document.getElementById('image-carousel');
    const track = document.getElementById('carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    let currentImages = [];
    let currentIndex = 0;

    // Initialize Hexagon Clicks
    hexagons.forEach(hex => {
        hex.addEventListener('click', () => {
            // Remove active from all
            hexagons.forEach(h => h.classList.remove('active'));
            // Add active to clicked
            hex.classList.add('active');

            const key = hex.getAttribute('data-interest');
            const data = interestsData[key];

            if (data) {
                // Update Text
                titleEl.textContent = data.title;
                descEl.textContent = data.desc;

                // Update Images
                currentImages = data.images;
                currentIndex = 0;
                buildCarousel();
            }
        });
    });

    // Build Carousel
    function buildCarousel() {
        // Clear existing
        track.innerHTML = '';
        indicatorsContainer.innerHTML = '';

        if (currentImages.length === 0) {
            carouselContainer.classList.add('hidden');
            carouselContainer.style.position = 'absolute';
            return;
        }

        carouselContainer.classList.remove('hidden');
        carouselContainer.style.position = 'relative';

        // Add Images & Dots
        currentImages.forEach((src, index) => {
            // Image
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('carousel-image');
            img.alt = `Carousel Image ${index + 1}`;
            track.appendChild(img);

            // Dot
            if (currentImages.length > 1) {
                const dot = document.createElement('div');
                dot.classList.add('indicator-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(dot);
            }
        });

        // Hide/Show Controls based on count
        if (currentImages.length <= 1) {
            btnPrev.style.display = 'none';
            btnNext.style.display = 'none';
        } else {
            btnPrev.style.display = 'flex';
            btnNext.style.display = 'flex';
        }

        updateSlidePosition();
    }

    // Carousel Navigation
    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const offset = currentIndex * -100;
        track.style.transform = `translateX(${offset}%)`;

        // Update Dots
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
        updateSlidePosition();
    });

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    });
});
