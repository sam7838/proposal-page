const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

noBtn.addEventListener('mouseover', moveButton);

function moveButton() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    question.textContent = "Haha nice try";
}

yesBtn.addEventListener('click', () => {
    window.location.href = 'fireworks.html';
});
