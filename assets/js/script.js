let canvas = document.querySelector('.canvas');
let emoji = document.querySelector('.emoji');
let shapes = document.querySelector('.shapes');
let scoreDiv = document.querySelector('.score');
let padLeft = document.querySelector('.buttonLeft');
let padRight = document.querySelector('.buttonRight');
let buttonCalc = document.querySelector('.calculator');
let buttonPlay = document.querySelector('.playGame');
let gMenu = document.querySelector('.gameMenu');
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

function mainMenu(){
    padLeft.style.display = "none";
    padRight.style.display = "none";
    scoreDiv.style.display = "none";
    buttonCalc.style.display = "none";
    emoji.style.display = "none";

}

function displayScore() {
    scoreDiv.innerHTML = `Score: ${score}`;
}

function generateShapes() {
    gMenu.style.display = "none";
    padLeft.style.display = "block";
    padRight.style.display = "block";
    scoreDiv.style.display = "block";
    buttonCalc.style.display = "block";
    emoji.style.display = "block";
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
                buttonPlay.style.display = 'none';
                gameAlertBox.style.display = 'block';
                mGameOver.innerHTML = `Game Over!`;
                mGameMessage.innerHTML = `Your Final Score is ${score}`;
                clearInterval(fallInterval);
                clearInterval(shapeTimeout);
                shapes.remove();
                emoji.remove();
                ++stopper;
                return;
            }
            shapeBottom -= 7;
            shape.style.bottom = shapeBottom + 'px';
            shape.style.left = shapeLeft + 'px';
        }
        let fallInterval = setInterval(fallDownShape, 20);
        var shapeTimeout = setTimeout(generateShapes, 1500);
    }
}

function reloadGame(){
    location.reload();
}

mainMenu();

document.addEventListener('keydown',control);

//X = Area and Y = Perimeter

function getCircle(){
    let r = parseFloat(document.getElementById('radius').value);
    let X = Math.PI * r**2;
    let Y = 2 * Math.PI * r;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getTriangle(){
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('base').value);
    let c = parseFloat(document.getElementById('sideC').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = 0.5 * b * h;
    let Y = a + b + c;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getRectangle() {
    let l = parseFloat(document.getElementById('length').value);
    let w = parseFloat(document.getElementById('width').value);
    let X = l * w;
    let Y = 2 * (l + w);
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getSquare() {
    let s = parseFloat(document.getElementById('side').value);
    let X = s**2;
    let Y = 4 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getParallelogram() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('base').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = b * h;
    let Y = 2 * (a + b);
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getTrapezoid() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b1 = parseFloat(document.getElementById('base1').value);
    let b2 = parseFloat(document.getElementById('base2').value);
    let c = parseFloat(document.getElementById('sideC').value);
    let h = parseFloat(document.getElementById('height').value);
    let X = [(b1 + b2) / 2] * h;
    let Y = a + b1 +b2 + c;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getPentagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = 0.25 * Math.sqrt(5 * [5 + 2 * Math.sqrt(5)]) * s**2;
    let Y = 5 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getHexagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = ([3 * Math.sqrt(3)] / 2) * s**2;
    let Y = 6 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getOctagon() {
    let s = parseFloat(document.getElementById('side').value);
    let X = 2 * [1 + Math.sqrt(2)] * s**2;
    let Y = 8 * s;
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}

function getKite() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('sideB').value);
    let h = parseFloat(document.getElementById('height').value);
    let w = parseFloat(document.getElementById('width').value);
    let X = (h * w) / 2
    let Y = 2 * (a + b)
    document.getElementById('area').innerHTML = X;
    document.getElementById('perimeter').innerHTML = Y;
}