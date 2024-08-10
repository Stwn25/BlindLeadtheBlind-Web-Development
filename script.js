// Toogle class active
const navbar = document.querySelector('.navigation ul');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbar.classList.toggle('active');
};

