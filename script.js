let display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {

    let expression = display.value;

    try {

        let result = eval(expression);

        display.value = result;

        let historyList = document.getElementById("historyList");

        let item = document.createElement("li");

        item.textContent = expression + " = " + result;

        historyList.prepend(item);

    }

    catch {

        display.value = "Error";

    }

}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {
        addToDisplay(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        backspace();
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});