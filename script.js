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
function square() {
    display.value = Math.pow(Number(display.value), 2);
}

function cube() {
    display.value = Math.pow(Number(display.value), 3);
}

function squareRoot() {
    display.value = Math.sqrt(Number(display.value));
}

function sin() {
    display.value = Math.sin(Number(display.value) * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(Number(display.value) * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(Number(display.value) * Math.PI / 180);
}

function log() {
    display.value = Math.log10(Number(display.value));
}
function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}
function changeTheme(theme) {

    document.body.className = "";

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (theme === "ocean") {
        document.body.classList.add("ocean-mode");
    }

    if (theme === "neon") {
        document.body.classList.add("neon-mode");
    }

    localStorage.setItem("theme", theme);
}
window.onload = function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        changeTheme(savedTheme);

        // set dropdown value back
        document.querySelector("select").value = savedTheme;
    }
};
function convertUnit() {
    let value = Number(document.getElementById("unitInput").value);
    let type = document.getElementById("unitType").value;
    let result = 0;

    if (type === "km-m") {
        result = value * 1000;
    }

    else if (type === "m-km") {
        result = value / 1000;
    }

    else if (type === "kg-g") {
        result = value * 1000;
    }

    else if (type === "g-kg") {
        result = value / 1000;
    }

    document.getElementById("unitResult").innerText =
        "Result: " + result;
}
   
