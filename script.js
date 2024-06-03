document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const subMenus = dropdown.querySelectorAll('.sub-menu');
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
        dropdown.addEventListener('mouseover', () => {
            const subMenus = dropdown.querySelectorAll('.sub-menu');
            let maxHeight = 0;
            subMenus.forEach(subMenu => {
                subMenu.style.display = 'flex';
                const height = subMenu.scrollHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            subMenus.forEach(subMenu => {
                subMenu.style.height = `${maxHeight}px`;
                subMenu.style.opacity = '1';
            });
        });
        dropdown.addEventListener('mouseout', () => {
            const subMenus = dropdown.querySelectorAll('.sub-menu');
            subMenus.forEach(subMenu => {
                subMenu.style.display = 'none';
                subMenu.style.height = 'auto';
                subMenu.style.opacity = '0';
            });
        });
    });
});
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// Ensure header is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    header.classList.remove('hidden');
});
