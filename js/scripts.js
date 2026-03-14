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
            offset: 350,
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
        let speed = target / 120;

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

// ===================================================================== //
// SINGLE DOMContentLoaded — skill bars, scroll reveal, tabs, show more
// ===================================================================== //
document.addEventListener("DOMContentLoaded", () => {

    // Skill bar animation
    const bars = document.querySelectorAll(".progress-bar");
    const skillSection = document.querySelector(".skills");
    if (skillSection && bars.length > 0) {
        const skillObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                bars.forEach((bar, i) => {
                    setTimeout(() => {
                        bar.classList.add("is-animating");
                        bar.style.width = bar.dataset.progress + "%";
                    }, i * 300);
                });
                setTimeout(animateSkillPercentages, 200);
                skillObserver.disconnect();
            });
        }, { threshold: 0.35 });
        skillObserver.observe(skillSection);
    }

    // Scroll reveal
    const revealElems = document.querySelectorAll(".reveal-on-scroll");
    if (revealElems.length > 0) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        revealElems.forEach(el => revealObserver.observe(el));
    }

    // Work tabs
    const tabs = document.querySelectorAll(".work-tab");
    const panels = document.querySelectorAll(".work-panel");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            tab.classList.add("active");
            document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
        });
    });

    // Show more projects
    const showMoreBtn = document.getElementById("showMoreProjects");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            document.querySelectorAll(".hidden-item").forEach(el => {
                el.classList.remove("hidden-item");
            });
            showMoreBtn.style.display = "none";
        });
    }

});