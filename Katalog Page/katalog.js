const user = document.querySelector('.profile-user');

document.querySelector('#profile-click').onclick = () => {
    user.classList.toggle('active');
};
