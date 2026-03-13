window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 200,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// ===================================================================== //
// 🔥 SKILL BAR ANIMATION + % COUNTER + STAGGER + GLOW
// ===================================================================== //

// Count % from 0 → target smoothly
function animateSkillPercentages() {
    document.querySelectorAll(".val").forEach(val => {
        let target = Number(val.dataset.target) || 0;
        let current = 0;
        let speed = target / 120;   // lower = slower count

        let counter = setInterval(() => {
            current += speed;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            val.innerText = Math.floor(current) + "%";
        }, 20);
    });
}

// Animate bars when section becomes visible
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");
    const skillSection = document.querySelector(".skills");
    if (!skillSection || bars.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            // 🔥 Staggered bar animation
            bars.forEach((bar, i) => {
                let width = bar.dataset.progress + "%";
                setTimeout(() => {
                    bar.classList.add("is-animating");  // <-- activates glow/gradient
                    bar.style.width = width;
                }, i * 300); // Delay: 0ms, 300ms, 600ms...
            });

            // 🔥 delayed number count sync
            setTimeout(animateSkillPercentages, 200);

            observer.disconnect(); // only run once
        });
    }, { threshold: 0.35 });

    observer.observe(skillSection);
});
// Scroll reveal for .reveal-on-scroll elements
document.addEventListener("DOMContentLoaded", () => {
    const revealElems = document.querySelectorAll(".reveal-on-scroll");
    if (revealElems.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    revealElems.forEach(el => observer.observe(el));
});


