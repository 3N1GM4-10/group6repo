let canvas = document.querySelector('.canvas');
let emoji = document.querySelector('.emoji');
let shapes = document.querySelector('.shapes');
let emojiLeft = parseInt(window.getComputedStyle(emoji).getPropertyValue('left'));
let emojiBottom = parseInt(window.getComputedStyle(emoji).getPropertyValue('bottom'));
let score = 0;

function moveEmojiLeft(){
    if (emojiLeft >= 0) {
        emojiLeft -= 70;
        emoji.style.left = emojiLeft + 'px';
    }
}

function moveEmojiRight(){
    if (emojiLeft <= 480) {
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

function generateShapes() {
    let shapeBottom = 670;
    let shapeLeft = Math.floor(Math.random() * 520);
    let shape = document.createElement('div');
    shape.setAttribute('class', 'shape')
    shapes.appendChild(shape);
    function fallDownShape(){
        if(shapeBottom < emojiBottom + 50 && shapeBottom > emojiBottom && shapeLeft > emojiLeft - 30 && shapeLeft < emojiLeft + 80) {
            shapes.removeChild(shape);
            clearInterval(fallInterval);
            score++;
        }
        if(shapeBottom < emojiBottom){
            alert('Game over! Your Score is: ' + score);
            clearInterval(fallInterval);
            clearInterval(shapeTimeout);
            location.reload();
        }
        shapeBottom -= 7;
        shape.style.bottom = shapeBottom + 'px';
        shape.style.left = shapeLeft + 'px';
    }
    let fallInterval = setInterval(fallDownShape, 20);
    var shapeTimeout = setTimeout(generateShapes, 2000);
}
generateShapes();

document.addEventListener('keydown',control);