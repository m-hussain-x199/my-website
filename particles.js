// Include Particles.js configuration
particlesJS("particle-background", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ff6a"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ff6a",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});

// Click effect
document.body.addEventListener('click', function(e) {
    const effect = document.createElement('div');
    effect.classList.add('click-effect');
    effect.style.left = `${e.pageX}px`;
    effect.style.top = `${e.pageY}px`;
    document.body.appendChild(effect);
    
    setTimeout(() => effect.remove(), 500);
});

// Scroll Animation (fade-in on scroll)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Parallax Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100 - 50;
    const y = (e.clientY / window.innerHeight) * 100 - 50;
    document.body.style.backgroundPosition = `${x}px ${y}px`;
});
