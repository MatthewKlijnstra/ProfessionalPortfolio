// MoreAboutMe.JS - Logic for the Hexablock interaction and dynamic image carousel

const interestsData = {
    selfdefense: {
        title: "Selfdefense",
        desc: "I have been training in selfdefense for 8 years now, and I'm not thinking of stopping anytime soon. The selfdefense style I practice is called American Kenpo Karate. It's a very practical style that focuses on self-preservation and de-escalation. It's also a lot of fun!",
        images: ["Images/AboutMe/Selfdefense/Selfdefense1.jpg", "Images/AboutMe/Selfdefense/Selfdefense2.jpg", "Images/AboutMe/Selfdefense/Selfdefense3.jpg", "Images/AboutMe/Selfdefense/Selfdefense4.jpg"]
    },
    cycling: {
        title: "Cycling",
        desc: "Born in the best biking country there is, I definitely have a bike. Pratical and good for your health, but I don't just use it. Learning mechanics, cleaning and maintaing my bike is also a great hobby. There's more to everythingh if you just put the time in to it.",
        images: ["Images/AboutMe/Cycling/Cycling1.jpg", "Images/AboutMe/Cycling/Cycling2.jpg", "Images/AboutMe/Cycling/Cycling3.jpg", "Images/AboutMe/Cycling/Cycling4.jpg"]
    },
    stargazing: {
        title: "Stargazing",
        desc: "The one thing most people never do is look up. There is so much to see if you just take the time to look up. On a clear night, you can see so many stars and planets. With just a little telescope I took these pictures. It's really cool.",
        images: ["Images/AboutMe/Stargazing/Stargazing1.jpg", "Images/AboutMe/Stargazing/Stargazing2.jpg", "Images/AboutMe/Stargazing/Stargazing3.jpg", "Images/AboutMe/Stargazing/Stargazing4.jpg"]
    },
    pet: {
        title: "My Dog",
        desc: "We have Sky for almost 8 years now, and she is also almost 8. A middle aged dog, but she acts like an oldie. I take care of her by walking her sometimes, but mostly it's my parents duty. I don't see it as a duty though, I like it when I go out for a walk, and it's good for both of us.",
        images: ["Images/AboutMe/Walking/Walking1.jpg", "Images/AboutMe/Walking/Walking2.jpg", "Images/AboutMe/Walking/Walking3.jpg", "Images/AboutMe/Walking/Walking4.jpg"]
    },
    shootingsports: {
        title: "Shooting Sports",
        desc: "One of the more 'dangerous' looking hobbies I have, but it's really not. It's very peaceful and takes a lot of concentration. I practice shooting at targets to improve my accuracy and focus. I've been a member of the shooting club for about 2 years now and I really enjoy it.",
    },
    army: {
        title: "Army",
        desc: "I haven't served in the army yet, but I plan to in the future. My grandfather served as in the marinecorps for 42 years and my father served as in the army, so I guess you can say it runs in the family.",
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
                currentImages = data.images || [];
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
            return;
        }

        carouselContainer.classList.remove('hidden');

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
