let container = document.getElementById("colorPickerContainer");
let selectedText = document.getElementById("selectedColorHexCode");

let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.textContent;
        container.style.backgroundColor = color;
        selectedText.textContent = color;
    });
});
