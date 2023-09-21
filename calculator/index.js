const history = document.getElementById("prev");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btns");


let string = "";


buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.innerHTML == "=") {
            history.innerHTML = string;
            string = eval(string);
            result.innerHTML = string;
        }
        else if (btn.innerHTML == "AC") {
            string = "";
            result.innerHTML = "0";
        }
        else {
            if (string.length > 8) {
                result.style.fontSize = "45px";
                string += btn.innerHTML;
                result.innerHTML = string;
            }
            else {
                string += btn.innerHTML;
                result.innerHTML = string;
            }
        }
    })
})

