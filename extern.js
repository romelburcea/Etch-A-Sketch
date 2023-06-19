const container = document.querySelector(".container");
const header = document.querySelector(".header");

function makeGrid(size) {
 let boxes = container.querySelectorAll('div');
 boxes.forEach(div => div.remove());
 container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
 container.style.gridTemplateRows = `repeat(${size}, 1fr`;

    for (let i = 0; i < size**2; i++) {
        let box = document.createElement("div");
        box.classList.add('box');
        box.style.backgroundColor = 'white';
        container.insertAdjacentElement('beforeend', box);
        box.addEventListener('mouseover', colorIt);

    }
}

function changeSize(input){
    if(input >= 1 && input <=100){
        makeGrid(input);
    } else {
        alert("Don't mess with the size, maximum is 100. Still, I find anything over 50 to be ugly, but whatever.");
    } if (input >=50 && input <= 100) {
        alert("This is ugly.")
    }
}

function colorIt(){
    if (color==='random'){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const newColor = "#" + randomColor;
        this.style.backgroundColor = newColor;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choose){
    color = choose;
}

function Reset(){
    input = 16;
    changeSize(input);

    userInput.value = 16;
}
makeGrid(16);