let countElement = document.querySelector('.timer')
let inCreaseButton = document.querySelector('.increase')
let deCreaseButton = document.querySelector('.decrease')
let resetButton = document.querySelector('.reset')

let timer = 0;

function changingTextColor() {
    countElement.textContent = timer;
    if (timer > 0){
        countElement.style.color = 'green';
    } else if (timer < 0) {
        countElement.style.color = 'red';
    } else {
        countElement.style.color = 'gray';

    }

}

function increase() {   
    timer++;
    countElement.textContent = timer;
    changingTextColor()
};


function decrease() {
    timer--;
    countElement.textContent = timer;
    changingTextColor()
};


function reset() {
    timer=0;
    countElement.textContent = timer;
    changingTextColor()
};

inCreaseButton.addEventListener ('click', increase);
deCreaseButton.addEventListener ('click', decrease)
resetButton.addEventListener ('click', reset);


changingTextColor();