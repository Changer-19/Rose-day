let yesScale = 1;

// Initial transition
setTimeout(() => {
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
}, 2000);

function checkName() {
    const name = document.getElementById('nameInput').value.trim();
    const error = document.getElementById('error');
    
    if (name.toLowerCase() === "jeeya") {
        document.getElementById('screen2').classList.add('hidden');
        document.getElementById('screen3').classList.remove('hidden');
        document.getElementById('displayName').innerText = "For You, " + name + "! 🐼";
    } else {
        error.innerText = "Incorrect name! This rose is for Jeeya.";
    }
}

function handleNoClick() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // 1. Move the No button to a random spot
    noBtn.style.position = 'fixed';
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // 2. Grow the Yes button
    yesScale += 0.4; 
    yesBtn.style.transform = `scale(${yesScale})`;
}

function showFinal() {
    document.getElementById('screen3').classList.add('hidden');
    const screen4 = document.getElementById('screen4');
    screen4.classList.remove('hidden');
    screen4.classList.add('show');
    startHeartShower();
}

function startHeartShower() {
    const container = document.getElementById('heart-container');
    const icons = ['❤️', '💖', '🌹', '✨', '🐼'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = icons[Math.floor(Math.random() * icons.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 4000);
    }, 150);
}