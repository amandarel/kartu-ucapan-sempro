window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to'); 

    const databasePesan = {
        "kak cika": "ANJAIII KAK CIKA SO SEMPROOO 🐣<br> Satu beban berat sudah hilang Beban lain akan datang😎<br> main roblox dulu, istirahat tidak lama habis itu gas revisi, semangat kak cika, sehat-sehat.",
        "yokbetkak": "Selamat sempro ibunda Yokbet istri potifar😏<br> sangat bangga dengan pencapaian ibunda yang sangat tidak mudah dan kedepannya pasti masih tidak mudah, ah mar dengan roasting orang bisa apalagi ini<br> you always got my back kecuali saki belakang.",
    };

    if (recipient) {
        document.getElementById('recipient-name').innerText = recipient;
        document.title = "Happy Sempro " + recipient + "!";
        const namaKecil = recipient.toLowerCase();

        if (databasePesan[namaKecil]) {
            document.getElementById('custom-message').innerHTML = databasePesan[namaKecil];
        } else {
            document.getElementById('custom-message').innerHTML = databasePesan["default"];
        }
    }
};

function startCelebration() {
    const startScreen = document.getElementById('startScreen');
    const card = document.getElementById('card');
    const audio = document.getElementById('celebrationAudio');
    const progressFill = document.querySelector('.progress-fill');

    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        
        card.classList.add('active');

        audio.volume = 0.6;
        audio.play();

    
        setTimeout(() => {
            progressFill.style.width = "50%";
        }, 300);

        runConfetti();

    }, 300);
}

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
      
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}





