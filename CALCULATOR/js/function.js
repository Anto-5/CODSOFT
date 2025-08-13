let displayBox = document.getElementById("display");

function addToDisplay(value) {
    displayBox.value += value;
}

function deleteLast() {
    displayBox.value = displayBox.value.slice(0, -1);
}

function clearAll() {
    displayBox.value = "";
}

function calculateResult() {
    try {
        let expression = displayBox.value.replace("%", "/100");
        displayBox.value = eval(expression);
    } catch (error) {
        displayBox.value = "Error";
    }
}
