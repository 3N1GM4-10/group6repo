let canvas = document.querySelector('.canvas');
let emoji = document.querySelector('.emoji');
let shapes = document.querySelector('.shapes');
let emojiLeft = parseInt(window.getComputedStyle(emoji).getPropertyValue('left'));
let emojiBottom = parseInt(window.getComputedStyle(emoji).getPropertyValue('bottom'));
document.getElementById("buttonLeft").style.display = 'block';
document.getElementById("buttonRight").style.display = 'block';
document.getElementById("alertBox").style.display = "none";
let score = 0;
let lnum = 0

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
    document.getElementById("score").innerHTML = `Score: ${score}`;
}

function generateShapes() {
    if(lnum < 1) {
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
                document.getElementById("alertBox").style.display = 'block';
                document.getElementById("gameOver").innerHTML = `Game Over!`;
                document.getElementById("gameMessage").innerHTML = `Your Final Score is ${score}`;
                document.getElementById("buttonLeft").style.display = 'none';
                document.getElementById("buttonRight").style.display = 'none';
                clearInterval(fallInterval);
                clearInterval(shapeTimeout);
                shapes.remove();
                emoji.remove();
                ++lnum;
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
