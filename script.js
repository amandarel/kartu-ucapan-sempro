window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to'); 

    const databasePesan = {
        "kak cika": "ANJAIII KAK CIKA SO SEMPROOO 🐣<br>Satu beban berat sudah hilang, Beban lain akan datang😎<br>Main roblox dulu, istirahat tidak lama habis itu gas revisi, semangat kak cika, sehat-sehat.",
        "kak yokbet": "Selamat sempro ibunda Yokbet istri potifar😏<br>Sangat bangga dengan pencapaian ibunda yang sangat tidak mudah dan kedepannya pasti masih tidak mudah... you always got my back kecuali saki belakang. Love ibunda satu danau.",
        "default": "Congratulations! 🐣<br>Anjaii sudah sempro! Satu beban berat sudah hilang. Istirahat sejenak habis itu gas revisi! Semangat terus, sehat-sehat selalu."
    };

    if (recipient) {
        document.getElementById('recipient-name').innerText = recipient + "! 🐣";
        document.title = "Happy Sempro " + recipient + "!";
        const namaKecil = recipient.toLowerCase();

        if (databasePesan[namaKecil]) {
            document.getElementById('custom-message').innerHTML = `"${databasePesan[namaKecil]}"`;
        } else {
            document.getElementById('custom-message').innerHTML = `"${databasePesan["default"]}"`;
        }
    }
};

function startCelebration() {
    const startScreen = document.getElementById('startScreen');
    const card = document.getElementById('card');
    const audio = document.getElementById('celebrationAudio');
    const toggleBtn = document.getElementById('toggleAudio');
    const progressBar = document.getElementById('progressBar');

    // Hide start screen
    startScreen.style.display = 'none';
    
    // Show card with animation
    card.classList.remove('hidden');
    card.style.display = 'block';
    toggleBtn.classList.remove('hidden');

    // Audio Logic
    audio.play().catch(e => console.log("Audio play blocked"));

    // Progress Bar Logic
    setTimeout(() => {
        progressBar.style.width = "50%";
    }, 500);

    runConfetti();
}

function runConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

// Mute/Unmute toggle
document.getElementById('toggleAudio').onclick = function() {
    const audio = document.getElementById('celebrationAudio');
    if (audio.muted) {
        audio.muted = false;
        this.innerText = '🔊';
    } else {
        audio.muted = true;
        this.innerText = '🔇';
    }
};
