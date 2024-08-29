const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

function moveButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    question.textContent = "Haha nice try";
}

// Handle mouse events
noBtn.addEventListener('mouseover', moveButton);

// Handle touch events for mobile
noBtn.addEventListener('touchstart', moveButton);
