// Müzik Kontrolü
function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const btn = document.querySelector('.music-btn');
    
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '<i class="fas fa-pause"></i> <span>Müziği Durdur</span>';
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fas fa-play"></i> <span>Müziği Başlat</span>';
    }
}

// Navigasyon Scroll
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Albüm Modal
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    modalImg.src = imageSrc;
    caption.textContent = 'Özel Anımız ❤️';
    modal.classList.add('show');
}

function closeModal(event) {
    const modal = document.getElementById('imageModal');
    if (event && event.target === modal) {
        modal.classList.remove('show');
    } else {
        modal.classList.remove('show');
    }
}

// Şiir Beğeni
function likePoem(btn) {
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#ff4d6d';
        span.textContent = 'Beğenildi';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
        span.textContent = 'Beğen';
    }
}

// Balon Oyunu - 22 fotoğraf için 22 balon
function createBalloons() {
    const container = document.getElementById('balloonsContainer');
    const balloonCount = 22; // 28 toplam - 6 albüm = 22 balon
    
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.dataset.number = i + 7; // 7'den başlayacak (çünkü 1-6 albümde)
        balloon.onclick = function() { popBalloon(this); };
        container.appendChild(balloon);
    }
}

function popBalloon(balloon) {
    balloon.classList.add('popped');
    
    // Balon numarasına göre fotoğraf göster
    const balloonNumber = parseInt(balloon.dataset.number);
    const photoName = `${balloonNumber}.jpg`;
    
    // Rastgele gecikme ile fotoğraf göster
    setTimeout(() => {
        openModal(photoName);
    }, 300);
}

// Aşk Sayacı
function updateLoveCounter() {
    const counter = document.getElementById('loveCount');
    let count = 0;
    
    const interval = setInterval(() => {
        count++;
        counter.textContent = count;
        
    }, 20);
}

// Sayfa Yüklendiğinde
window.onload = function() {
    createBalloons();
    updateLoveCounter();
    
    // Navigasyon scroll efekti
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
};