// MoreAboutMe.JS - Logic for the Hexablock interaction and dynamic image carousel

const interestsData = {
    selfdefense: {
        title: "Selfdefense",
        desc: "I have been training in selfdefense for 8 years now, and I'm not thinking of stopping anytime soon. The selfdefense style I practice is called American Kenpo Karate. It's a very practical style that focuses on self-preservation and de-escalation. It's also a lot of fun!",
        images: ["Images/AboutMe/Selfdefense/Selfdefense1.jpg", "Images/AboutMe/Selfdefense/Selfdefense2.jpg", "Images/AboutMe/Selfdefense/Selfdefense3.jpg", "Images/AboutMe/Selfdefense/Selfdefense4.jpg"]
    },

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
