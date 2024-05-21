window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentIndex = -1;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    if (currentIndex !== -1) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentIndex].classList.add('active');
    }
});

const menuItems = document.querySelectorAll('.navbar ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#575757';
        this.style.color = '#fff';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = '#fff';
    });
});
