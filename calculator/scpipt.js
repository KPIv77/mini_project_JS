
let expression = "";

function showMessage(value) {
    const messageEl = document.getElementById("message");

    if ((!isNaN(value)) || (value === '.'))  {
        expression += value
        messageEl.innerText = expression;

    } 
    else if (value === "AC") {
        expression = "";
        messageEl.innerText = "";

    } 
    else if (value === 'Del') {
        expression = expression.slice(0, -1);
        messageEl.innerText = expression;

    } 
    else if (value === 'x') {
        expression += "*";
        messageEl.innerText = expression;

    } 
    else if (value === '+') {
        expression += "+";
        messageEl.innerText = expression;
    }

    else if (value === '/') {
        expression += "/";
        messageEl.innerText = expression;
    }

    else if (value === '-') {
        expression += "-";
        messageEl.innerText = expression;
    }

    else if (value === '%') {
        expression = (parseFloat(expression) / 100).toString();
        messageEl.innerText = expression;
    }

    else if (value === 'PI') {
        expression = Math.PI;
        messageEl.innerText = expression;
    }

    else if (value === "=") {
        try {
            expression = eval(expression).toString();
            messageEl.innerText = expression;

        } catch {
            messageEl.innerText = "Error";
            expression = "";
        }
    }
}

