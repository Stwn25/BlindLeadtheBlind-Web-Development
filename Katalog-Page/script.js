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
    window.location.href = '../Authen-Page/Signin-Page/'
});

//filter kategori jenis barang
const jenis_brg = document.querySelector('.jenis-brg');
const chevron_down = document.querySelector('.chevron-down')

document.querySelector('.header-aside').addEventListener('mousedown', () => {
    if(jenis_brg.style.display === 'none'){
        jenis_brg.style.display = 'flex';
        chevron_down.classList.add('rotate-180');
    }else{
        jenis_brg.style.display = 'none'
        chevron_down.classList.remove('rotate-180');
    }
});


//Klik button pada item produk

// Pilih semua tombol "Beli" di dalam elemen dengan class "item"
const bt_beli = document.querySelectorAll('.item article button');

// Iterasi melalui setiap tombol yang ditemukan
bt_beli.forEach(button => {
    button.addEventListener('mousedown', () => {
        // Arahkan pengguna ke halaman Detail-Produk-Page/
        window.location.href = 'Detail-Produk-Page/';
    });
});
