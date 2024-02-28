let boxes = document.querySelectorAll(".box");
let string = "";
Array.from(boxes).forEach((box) => {
    box.addEventListener("click", (e) => {
        let screen = document.querySelector('.screen');
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                screen.value = string;
                
            } catch (error) {
                screen.value = "Error";
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            screen.value = "";
        } 
        else if(e.target.innerHTML=="C"){
            string = "0";
            screen.value = "0";
        }
        else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
});