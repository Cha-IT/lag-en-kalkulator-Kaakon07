let currentOp = "+";

function getNumButton(buttonElement) {
    let num = buttonElement.innerText;
    console.log(num)
    returnNum(num);
}

function getOperator(operatorElement) {
    let operator = operatorElement.innerText;
    if (operator === "+")
        currentOp = "+"
    else if (operator === "-") {
        currentOp = "-"
    }
    else if (operator === "*") {
        currentOp = "*"
    }
    else if (operator === "/") {
        currentOp = "/"
    }
    console.log(currentOp)
}

function returnNum(Number) {
    let number = parseInt(Number)
    let numHold = document.getElementById("returnedNum");
    let content = numHold.innerText;
        if (currentOp === "+") {
            numHold.innerText = parseInt(content) + number
        }
        else if (currentOp === "-") {
            numHold.innerText = parseInt(content) - number
        }
        else if (currentOp === "*") {
            numHold.innerText = parseInt(content) * number
        }
        else if (currentOp === "/") {
            numHold.innerText = parseInt(content) / number
        }
        
}

function clearOutput() {
    let numHold = document.getElementById("returnedNum");
        numHold.textContent = "0";
        console.log("clear");
}
