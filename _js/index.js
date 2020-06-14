const buttons = {
    clear: { content: 'C', keyCode: 46 },
    backspace: { content: '', keyCode: 8 },
    divide: { content: '÷', keyCode: 111 },
    multiply: { content: '*', keyCode: 106 },
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

const btns = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');
const display = document.querySelector('#display-content');
let history = '';
let done = false;

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
    switch (operation) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b)
            break;
    }
    return result;
}

function deleteNum() {    
    let input = getDisplay();

    if (input === 'ERROR') return;

    let len = input.length;
    let arr = input.split("");
    arr[len - 1] = "";
    input = arr.join(""); 
    setDisplay(input);    
}

function addEventListeners() {
    btns.forEach(btn => {
        btn.addEventListener('click', handleNumInput)
    });

    clearBtn.addEventListener('click', clearAll);

    backspaceBtn.addEventListener('click', deleteNum);

    operators.forEach(btn => {
        btn.addEventListener('click', handleOperatorInput);
    })

    equalBtn.addEventListener('click', handleEqualInput);
}

function populateDisplay(content) {
    display.textContent += content;
}

function setDisplay(content) {
    display.textContent = content;
}

function getDisplay() {
    return display.textContent;
}

function clearDisplay() {
    setDisplay('');
}

function setHistory(content) {
    history = content;
}

function getHistory() {
    return history;
}

function clearHistory() {
    setHistory('');
}

function clearAll() {
    clearDisplay();
    clearHistory();    
}

function handleNumInput(e) {
    let btnId = e.target.id;
    let input = getDisplay();

    if (buttons[btnId]) {
        if (done) {
            setDisplay('');
            done = false;
        }

        if (btnId == 'decimal'){
            
            if (input.includes('.')) {
                return;
            } 
            else if (input == '0') {
                populateDisplay('0.');
            }
            else {
                populateDisplay('.');
            }
        }
        else if (btnId == 'zero') {

            if (input == '0') {
                return;
            }
            else {
                populateDisplay('0');
            }
        }
        else {
            populateDisplay(buttons[btnId].content);
        }        
    }   
}

function handleOperatorInput(e) {
    let btn = e.target;
    let btnId = e.target.id;
    let history = getHistory();
    let input = getDisplay();

    if (input === 'ERROR') return;   

    

    if (buttons[btnId]) {
        let op = buttons[btnId].content;

        
        if (history === '') {
            history = input + op;
            setHistory(history);
            done = true;
        }
        else {           
            history += input;
            let result = evaluate(history).toString();
            setDisplay(result);
            result += op;
            setHistory(result);            
            done = true;
        }
    }
    
}

function handleEqualInput(e) {
    let history = getHistory();
    let input = getDisplay();

    if (input === 'ERROR') return;

    history += input;
    setDisplay(evaluate(history));
    clearHistory();    
    done = true;
}

function evaluate(expression) {   
    let result = 0;
    
    if (expression.includes('+')) {
        let arr = expression.split('+');
        result = operate('add', Number(arr[0]), Number(arr[1]));
    }
    else if (expression.includes('-')) {
        let arr = expression.split('-');
        result = operate('subtract', Number(arr[0]), Number(arr[1]));
    }
    else if (expression.includes('*')) {
        let arr = expression.split('*');
        result = operate('multiply', Number(arr[0]), Number(arr[1]));
    }
    else if (expression.includes('÷')) {
        let arr = expression.split('÷');
        result = operate('divide', Number(arr[0]), Number(arr[1]));
    }

    if (!isFinite(result) || isNaN(result)) {
        return 'ERROR';
    }    
    return result;
}

addEventListeners();