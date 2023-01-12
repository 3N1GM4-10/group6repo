let canvas = document.querySelector('.canvas');
let emoji = document.querySelector('.emoji');
let shapes = document.querySelector('.shapes');
let scoreDiv = document.querySelector('.score');
let padLeft = document.querySelector('.buttonLeft');
let padRight = document.querySelector('.buttonRight');
let buttonCalc = document.querySelector('.calculator');
let gameAlertBox = document.querySelector('.alertBox');
let mGameOver = document.querySelector('.gameOver');
let mGameMessage = document.querySelector('.gameMessage');
let emojiLeft = parseInt(window.getComputedStyle(emoji).getPropertyValue('left'));
let emojiBottom = parseInt(window.getComputedStyle(emoji).getPropertyValue('bottom'));
let score = 0;
let stopper = 0;
gameAlertBox.style.display = "none";

function moveEmojiLeft(){
    if (emojiLeft >= 0) {
        emojiLeft -= 70;
        emoji.style.left = emojiLeft + 'px';
    }
}

function moveEmojiRight(){
    if (emojiLeft <= 300) {
        emojiLeft += 70;
        emoji.style.left = emojiLeft + 'px';
    }
}

function control(e){
    if (e.key == 'ArrowLeft'){
        moveEmojiLeft();
    }
    
    if (e.key == 'ArrowRight'){
        moveEmojiRight();
    }
}

function displayScore() {
    scoreDiv.innerHTML = `Score: ${score}`;
}

function generateShapes() {
    if(stopper < 1) {
        let shapeBottom = 600;
        let shapeLeft = Math.floor(Math.random() * 320);
        let shape = document.createElement('div');
        shape.setAttribute('class', `shape${Math.floor(Math.random() * 12)}`)
        shapes.appendChild(shape);
        function fallDownShape(){
            if(shapeBottom < emojiBottom + 40 && shapeBottom > emojiBottom && shapeLeft > emojiLeft - 40 && shapeLeft < emojiLeft + 80) {
                shapes.removeChild(shape);
                clearInterval(fallInterval);
                score += 10;
                displayScore();
            }
            if(shapeBottom < emojiBottom){
                padLeft.style.display = 'none';
                padRight.style.display = 'none';
                scoreDiv.style.display = 'none';
                buttonCalc.style.display = 'none';
                gameAlertBox.style.display = 'block';
                mGameOver.innerHTML = `Game Over!`;
                mGameMessage.innerHTML = `Your Final Score is ${score}`;
                clearInterval(fallInterval);
                clearInterval(shapeTimeout);
                shapes.remove();
                emoji.remove();
                ++stopper;
            }
            shapeBottom -= 7;
            shape.style.bottom = shapeBottom + 'px';
            shape.style.left = shapeLeft + 'px';
        }
        let fallInterval = setInterval(fallDownShape, 20);
        var shapeTimeout = setTimeout(generateShapes, 1500);
    }
}

function replayGame(){
location.reload();
}

generateShapes();

document.addEventListener('keydown',control);
