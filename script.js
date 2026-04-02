/* =========================================
   1. LOADING GAME LOGIC
   ========================================= */

const tipsList = [
    "TIPS: Jaga sinkronisasi dayungan untuk bonus kecepatan!",
    "TIPS: Power Stroke menghabiskan stamina lebih cepat.",
    "TIPS: Sewa pemain dengan OVR tinggi untuk menang di tingkat regional.",
    "TIPS: Latihan di arus deras meningkatkan kekuatan pemain.",
    "TIPS: Kumpulkan koin dari turnamen untuk membuka lokasi baru!"
];

// Jalankan saat halaman di-load
window.onload = function() {
    startLoading();
};

function startLoading() {
    let bar = document.getElementById('bar');
    let percentText = document.getElementById('percent');
    let tipsText = document.getElementById('tips-text');
    let width = 0;

    // Set Tips secara acak tiap kali masuk
    let randomTip = tipsList[Math.floor(Math.random() * tipsList.length)];
    tipsText.innerText = randomTip;

    // Simulasi Progress Loading
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Setelah selesai, pindah ke lobi
            setTimeout(() => {
                window.location.href = "lobi.html";
            }, 500);
        } else {
            width++;
            bar.style.width = width + '%';
            percentText.innerText = width + '%';
        }
    }, 50); // Kecepatan loading bisa diatur di sini
}
