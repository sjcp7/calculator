const buttons = {
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
    let id = e.target.id;
    let display = getDisplay();
    display += `${buttons[id].content}`;    
    setDisplay(display);
}

function clearDisplay() {
    setDisplay("");
}

function deleteNum() {
    let display = getDisplay();
    let len = display.length;
    let arr = display.split("");
    arr[len - 1] = "";
    display = arr.join(""); 
    setDisplay(display);
    
}


function addEventListeners() {
    const numberBtns = document.querySelectorAll('.number');
    numberBtns.forEach(btn => {
        btn.addEventListener('click', handleNumInput);
    });

    const backspaceBtn = document.querySelector('#backspace');
    backspaceBtn.addEventListener('click', deleteNum);

    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', clearDisplay);

    const operatorsBtn = document.querySelectorAll('.operator'); 
    
    
}

function typeToDisplay(content) {
    const display = document.querySelector('#input-content');
    display.textContent += content;
}

function setDisplay(content) {
    const display = document.querySelector('#input-content');
    display.textContent = content;
}

function getDisplay() {
    const display = document.querySelector('#input-content');
    return display.textContent;
}


function handleNumInput(e) {
    const id = e.target.id;
    if (buttons[id]) {
        typeToDisplay(buttons[id].content)
    }
}



addEventListeners();