
var calcContainer = document.getElementById('calculatorContainer');


var resultContainer = document.getElementById('result');
resultContainer.innerHTML = '0';

var btnElementWrapper = document.createElement("div");

var btnOpsWrapper = document.createElement("div"); 


var selectedOperator = '';
var num1 = num2 = 0;
var settingFirstOperand = true;
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
            if (settingFirstOperand) {
                resultContainer.innerHTML = '';
                settingFirstOperand = false;
                console.log('Setting First Operand '+settingFirstOperand);

            }
            resultContainer.innerHTML += i;
        });      
        btnElementWrapper.appendChild(btnElementItem);
    }

}

function initClearButton() {
    var btnClearItem = drawButton("C");
    btnClearItem.addEventListener('click', (event) => {
        resultContainer.innerHTML = '';
        num1 = num2 = 0;
        selectedOperator = '';
        settingFirstOperand = true;
    });
    btnElementWrapper.appendChild(btnClearItem);
}

function initEqualsButton() {
    var btnEqualsItem = drawButton("=");
    btnEqualsItem.addEventListener('click', (event) => {
        console.log('Equals Button Pressed');     
        if (!num1) {
            console.log('Num1 / Num2 '+num1+' '+num2);
            return;
        }
        else {
            num2 = parseInt(resultContainer.innerHTML);             
            switch (selectedOperator)
            {
                case '+':
                    console.log('+ selected');
                    resultContainer.innerHTML = num1 + num2;
                    break;
                    return;
                case '-':
                    console.log('- selected');
                    resultContainer.innerHTML = num1 - num2;
                    break;
                    return;
                case '*':
                    console.log('* selected');
                    resultContainer.innerHTML = num1 * num2;
                    break;
                    return;
                case '/':
                    console.log('/ selected');
                    resultContainer.innerHTML = num1 / num2;
                    break;
                    return;
            }
            num1 = num2 = 0;
            selectedOperator = '';
            settingFirstOperand = true;
            console.log('Setting First Operand after = '+settingFirstOperand);
        }
    });
    btnElementWrapper.appendChild(btnEqualsItem);
}

function drawButton(buttonLabel) {
    var btnElement = document.createElement("div");    
    btnElement.id = "calcBtn" + buttonLabel;
    btnElement.classList.add('btn');
    btnElement.classList.add('btn-primary');
    btnElement.classList.add('my-2');
    btnElement.classList.add('mx-1');
    btnElement.classList.add('col-md-3'); 
    btnElement.appendChild(document.createTextNode(buttonLabel));
    return btnElement;
}

function initOperatorsButton() {
    var ops = ['+', '-', '/', '*'];
    for (let i = 0; i < ops.length; i++ ) {
        var btnOpsItem = drawButton(ops[i]); 
        btnOpsItem.addEventListener('click', (event) => {
            console.log(ops[i] + ' Button Pressed');
            num1 = parseInt(resultContainer.innerHTML);
            resultContainer.innerHTML = '';
            selectedOperator = ops[i];
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