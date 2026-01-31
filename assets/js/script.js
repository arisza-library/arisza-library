// toggle class active

const NavbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik

document.querySelector('#hamburger-menu').onclick = () => {
    NavbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan hamburger nav

const hamburger = document.querySelector('#hamburger-menu');

// ketika di klik diluar 

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
        NavbarNav.classList.remove('active');
    }
});

