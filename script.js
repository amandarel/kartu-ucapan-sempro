window.onload = function() {
    // 1. Ambil nama dari URL (?to=Nama)
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to');
    
    if (recipient) {
        document.getElementById('recipient-name').innerText = recipient;
        document.title = "Happy Sempro " + recipient + "!";
    }
};

function startCelebration() {
    const startScreen = document.getElementById('startScreen');
    const card = document.getElementById('card');
    const audio = document.getElementById('celebrationAudio');
    const progressFill = document.querySelector('.progress-fill');

    // 1. Hilangkan layar awal
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        
        // 2. Munculkan Kartu
        card.classList.add('active');

        // 3. Play Audio
        audio.volume = 0.6;
        audio.play();

        // 4. Jalankan Progress Bar (Efek loading ke 50%)
        // Kita set 50% karena Sempro kira-kira setengah jalan skripsi
        setTimeout(() => {
            progressFill.style.width = "50%";
        }, 300);

        // 5. LEDAKAN CONFETTI 🎉
        runConfetti();

    }, 300);
}

// Fungsi Confetti (Menggunakan library canvas-confetti)
function runConfetti() {
    var duration = 3 * 1000; // 3 detik
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      // Confetti dari kiri dan kanan
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}