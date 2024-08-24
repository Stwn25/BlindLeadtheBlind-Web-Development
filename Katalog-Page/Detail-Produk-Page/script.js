let timer;
const overlay = document.querySelector('.overlay');

// Icon profile 
const profile = document.querySelector('.profile-user');

//ketika mouseenter di icon profile
document.querySelector('#profile-click').addEventListener('mouseenter', () => {
    profile.classList.add('active');
    overlay.style.display = profile.classList.contains('active') ? 'block' : 'none';
});

//ketika mouseleave dari icon profile
document.querySelector('#profile-click').addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        profile.classList.remove('active');
        overlay.style.display = 'none';
    }, 150);
});

//ketika mouseenter di dropdown profile
profile.addEventListener('mouseenter', () => {
    clearTimeout(timer); // Menghapus timer jika mouse masuk lagi
    overlay.style.display = profile.classList.contains('active') ? 'block' : 'none';
});

//ketika mouseleave dari dropdown profile
profile.addEventListener('mouseleave', () => {
    profile.classList.remove('active')
    overlay.style.display = 'none';
});



// Icon keranjang
const keranjang = document.querySelector('.keranjang-user');

document.querySelector('#keranjang-click').addEventListener('mouseenter', () => {
    keranjang.classList.add('active');
    overlay.style.display = keranjang.classList.contains('active') ? 'block' : 'none';
});

//ketika mouseleave dari icon keranjang
document.querySelector('#keranjang-click').addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        keranjang.classList.remove('active');
        overlay.style.display = 'none';
    }, 150);
});

//ketika mouseenter di dropdown keranjang
keranjang.addEventListener('mouseenter', () => {
    clearTimeout(timer); // Menghapus timer jika mouse masuk lagi
    overlay.style.display = keranjang.classList.contains('active') ? 'block' : 'none';
});

//ketika mouseleave dari dropdown keranjang
keranjang.addEventListener('mouseleave', () => {
    keranjang.classList.remove('active')
    overlay.style.display = 'none';
});



//Icon notification
const notification = document.querySelector('.notif-user');
const bt_transaksi = document.querySelector('.bt-transaksi');
const bt_pesan = document.querySelector('.bt-pesan');
const transaksi = document.querySelector('.transaksi')
const pesan = document.querySelector('.pesan')

document.querySelector('#notif-click').addEventListener('mouseenter', () => {
    notification.classList.add('active');
    overlay.style.display = notification.classList.contains('active') ? 'block' : 'none';
    pesan.style.display = 'none';
    transaksi.style.display = 'block';
    bt_transaksi.classList.add('active');
});

//ketika mouseleave dari icon notif
document.querySelector('#notif-click').addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        notification.classList.remove('active');
        overlay.style.display = 'none';
        bt_pesan.classList.remove('active')
    }, 150);
});

//ketika mouseenter di dropdown notif
notification.addEventListener('mouseenter', () => {
    clearTimeout(timer); // Menghapus timer jika mouse masuk lagi
    overlay.style.display = notification.classList.contains('active') ? 'block' : 'none';
});

//ketika mouseleave dari dropdown notif
notification.addEventListener('mouseleave', () => {
    notification.classList.remove('active');
    overlay.style.display = 'none';
    bt_pesan.classList.remove('active')
});


//button transaksi dan pesan
document.querySelector('#bt-transaksi').addEventListener('mousedown', () => { //'mousedown' kondisi ketika click
    bt_transaksi.classList.add('active');
    bt_pesan.classList.remove('active');
    transaksi.style.display = 'block';
    pesan.style.display = 'none';
});

document.querySelector('#bt-pesan').addEventListener('mousedown', () => {
    bt_pesan.classList.add('active');
    bt_transaksi.classList.remove('active');
    transaksi.style.display = 'none';
    pesan.style.display = 'block';
});

// bt-masuk
document.querySelector('.bt-masuk').addEventListener('mousedown', () => {
    window.location.href = '../../Authen-Page/Signin-Page';
});


//Image gallery
const mainImg = document.querySelector('.main-img');

function changeMainImg(clickImg){   
    mainImg.style.backgroundImage = `url(${clickImg.src})`;
}


//Pemesanan
const bt_minus = document.querySelector('.minus');
const bt_plus = document.querySelector('.plus');
const value = document.querySelector('.count');
let count = 1;


bt_plus.addEventListener('mousedown', () => {
    count++;
    value.textContent = count;
});

bt_minus.addEventListener('mousedown', () => {
    if( count > 1){
        count--;
        value.textContent = count;
    }
});


//header filter ulasan
const bt_filter = document.querySelector('.header-filter');
const stars = document.querySelectorAll('.star')
const chevron_down = document.querySelector('.chevron-down')
const filter = document.querySelector('.filter-ulasan')

bt_filter.addEventListener('mousedown', () => {
    stars.forEach(star => {
        if(star.style.display === 'none'){
            star.style.display = 'flex';
            chevron_down.style.transform = 'rotate(180deg)';
            chevron_down.style.transition = '0.3s ease';
            filter.style.height = '220px';
        }
        else{
            star.style.display = 'none';
            chevron_down.style.transform = 'rotate(0deg)';
            chevron_down.style.transition = '0.3s ease';
            filter.style.height = '55px';
        }
    });
});
