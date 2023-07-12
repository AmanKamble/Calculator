const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "X") {
            input.value = input.value + '*';
        } else if (buttonText === "=") {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Wrong Input";
            }
        } else if (buttonText === "AC") {
            input.value = "";
        } else if (buttonText === "DE") {
            if (input.value === 'Wrong Input') {
                input.value = "";
            } else {
                input.value = input.value.slice(0, -1);
            }
        } else {
            input.value += buttonText;
        }
    });
});