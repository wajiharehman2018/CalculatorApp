
var calcContainer = document.getElementById('calculatorContainer');
calcContainer.style.border = '2px solid black';

var resultContainer = document.getElementById('result');

var btnElementWrapper = document.createElement("div");
btnElementWrapper.classList.add("col-md-8");

var btnOpsWrapper = document.createElement("div");
btnOpsWrapper.classList.add("col-md-5");


var selectedOperator = '';

initNumberButtons();
initClearButton();
initEqualsButton();
initOperatorsButton();


calcContainer.appendChild(btnElementWrapper);
calcContainer.appendChild(btnOpsWrapper);

// var num1 = null, num2 = null;
    // var num1Press = false, num2Press = false, opPress = false;
    // var switchNum = false;
function initNumberButtons() { 
    
    
    for (let i = 9; i >= 0; i--) {    
        var btnElementItem = drawButton(i);
        btnElementItem.addEventListener('click', (event) => {
            resultContainer.innerHTML += i;
        });      
        btnElementWrapper.appendChild(btnElementItem);
    }

}

function initClearButton() {
    var btnClearItem = drawButton("C");
    btnClearItem.addEventListener('click', (event) => {
        resultContainer.innerHTML = '';
    });
    btnElementWrapper.appendChild(btnClearItem);
}

function initEqualsButton() {
    var btnEqualsItem = drawButton("=");
    btnEqualsItem.addEventListener('click', (event) => {
        console.log('Equals Button Pressed');        
    });
    btnElementWrapper.appendChild(btnEqualsItem);
}

function drawButton(buttonLabel) {
    var btnElement = document.createElement("div");    
    btnElement.id = "calcBtn" + buttonLabel;
    btnElement.classList.add('btn');
    btnElement.classList.add('btn-primary');
    btnElement.classList.add('my-2');
    btnElement.classList.add('mx-2');
    btnElement.classList.add('w-25');
    btnElement.appendChild(document.createTextNode(buttonLabel));
    return btnElement;
}

function initOperatorsButton() {
    var ops = ['+', '-', '/', '*'];
    for (let i = 0; i < ops.length; i++ ) {
        var btnOpsItem = drawButton(ops[i]);
        btnOpsItem.addEventListener('click', (event) => {
            console.log(ops[i] + ' Button Pressed');
        });
        btnOpsWrapper.appendChild(btnOpsItem);
    }
}
// const setNum1 = (num) => {
//     if (num1 == null) {
//         num1 = num;
//         return;
//     }
//     num1 = num1 + '' + num; 
//     resultContainer.replaceChild(document.createTextNode(num1));
// };

// const setNum2 = (num) => {
//     num2 = '' + num;
//     resultContainer.appendChild(document.createTextNode(num2));
// };

// const getOps = (op) => {
//     switch (op) {
//         case 'C':
//             num1 = 0;
//             num2 = 0;
//             resultContainer.innerHTML = "";
//             console.log(resultContainer.innerHTML);
//             break;
//         case '+':

//         default:
//             break;
//     }
// };