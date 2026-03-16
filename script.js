const startBtn = document.getElementById('startbtn');
const resetBtn = document.getElementById('resetbtn');
const startScreen = document.getElementById('start-screen');
const itemsContainer = document.getElementById('items-container');
const resultMessage = document.getElementById('result-message');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const playerImgDiv = document.getElementById('player-choice-display');
const computerImgDiv = document.getElementById('computer-choice-display');

let playerScore = 0;
let computerScore = 0;

const options = [
    { id: 'rockbtn', name: 'Kamień', img: 'hand-rock-solid.svg' },
    { id: 'paperbtn', name: 'Papier', img: 'hand-paper-solid.svg' },
    { id: 'scissorsbtn', name: 'Nożyce', img: 'hand-scissors-solid.svg' }
];

// START GRY
startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    itemsContainer.style.display = 'flex';
    resetBtn.style.display = 'inline-block';
});

// LOGIKA RUNDY
document.querySelectorAll('.itm').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = options.find(opt => opt.id === button.id);
        const computerChoice = options[Math.floor(Math.random() * 3)];

        // Wyświetlanie obrazków
        playerImgDiv.innerHTML = `<img src="${playerChoice.img}">`;
        computerImgDiv.innerHTML = `<img src="${computerChoice.img}">`;

        // Sprawdzanie wyniku
        if (playerChoice.id === computerChoice.id) {
            resultMessage.innerText = "REMIS";
            resultMessage.style.color = "orange";
        } else if (
            (playerChoice.id === 'rockbtn' && computerChoice.id === 'scissorsbtn') ||
            (playerChoice.id === 'paperbtn' && computerChoice.id === 'rockbtn') ||
            (playerChoice.id === 'scissorsbtn' && computerChoice.id === 'paperbtn')
        ) {
            playerScore++;
            playerScoreSpan.innerText = playerScore;
            resultMessage.innerText = "WYGRANA!";
            resultMessage.style.color = "green";
        } else {
            computerScore++;
            computerScoreSpan.innerText = computerScore;
            resultMessage.innerText = "PRZEGRANA";
            resultMessage.style.color = "red";
        }
    });
});

// RESET
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = '0';
    computerScoreSpan.innerText = '0';
    playerImgDiv.innerHTML = '';
    computerImgDiv.innerHTML = '';
    resultMessage.innerText = '';
    itemsContainer.style.display = 'none';
    resetBtn.style.display = 'none';
    startScreen.style.display = 'block';
});