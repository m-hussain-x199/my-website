// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(100px)';
        }
    });
});
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.classList.add('pointer-trail');
    document.body.appendChild(trail);
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
});

window.addEventListener('scroll', function() {
    document.body.style.backgroundPositionY = `${window.scrollY / 2}px`;
});
