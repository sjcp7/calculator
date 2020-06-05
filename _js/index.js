let displayContent = "";
let historyContent = "";

const inputBox = document.querySelector('#input-content');

const buttonsObj = {
    clear: { content: 'C', keyCode: 46 },
    backspace: { content: '', keyCode: 8 },
    divide: { content: '÷', keyCode: 111 },
    multiply: { content: 'X', keyCode: 106 },
    seven: { content: 7, keyCode: 55 },
    eight: { content: 8, keyCode: 56 },
    nine: { content: 9, keyCode: 57 },
    subtract: { content: '-', keyCode: 109 },
    four: { content: 4, keyCode: 52 },
    five: { content: 5, keyCode: 53 },
    six: { content: 6, keyCode: 54 },
    add: { content: '+', keyCode: 107 },
    one: { content: 1, keyCode: 49 },
    two: { content: 2, keyCode: 50 },
    three: { content: 3, keyCode: 51 },
    equal: { content: '=', keyCode: 13 },
    zero: { content: 0, keyCode: 48 },
    decimal: { content: '.', keyCode: 110 }
}
const buttons = document.querySelectorAll('button');
addBtnEvents(buttons);


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b ;
}

function operate(operation, a, b) {
    let result = 0;
    if (operation === 'add') { result = add(a, b) }
    else if (operation === 'subtract') { result = subtract(a, b) }
    else if (operation === 'multiply') { result = multiply(a, b) }
    else if (operation === 'divide') { result = b !== 0 ? divide(a, b) : 'ERROR' }
    return result;
}

function populateDisplay(e) {
    let className = e.target.className;
    if (buttonsObj[className]) {
        displayContent += `${buttonsObj[className].content}`;
    }
    inputBox.textContent = displayContent;
}

function clearDisplay() {
    displayContent = "";
    inputBox.textContent = displayContent;
}

function deleteChar() {
    console.log("deleted");
}

function addBtnEvents(btns) {   
    
    btns.forEach(btn => {
        if ((btn.dataset.key >= 48 && btn.dataset.key <= 57)) {
            btn.addEventListener('click', populateDisplay);
        }
        else if (btn.className === "clear") {
            btn.addEventListener('click', clearDisplay);
        }
        else if (btn.className === "backspace") {
            btn.addEventListener('click', deleteChar)
        }
        else if (btn.className === "add") {
            btn.addEventListener('click', populateDisplay)
        }
        else if (btn.className === "subtract") {
            btn.addEventListener('click', populateDisplay)
        }
        else if (btn.className === "multiply") {
            btn.addEventListener('click', populateDisplay)
        }
        else if (btn.className === "divide") {
            btn.addEventListener('click', populateDisplay)
        }
        else if (btn.className === "equal") {
            
        }
    })
    
   
}




