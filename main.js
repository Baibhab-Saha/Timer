let countNumber = 20;
let countDownText = document.querySelector("h1");
let colors = ['red', 'blue', 'green', 'pink', 'orange', 'yellow', 'purple', 'brown']

function countDownFunction() {
    countNumber--;
    countDownText.innerHTML = countNumber;
    countDownText.style.color = colors[Math.floor(Math.random() * 8)];
    if (countNumber == 0) {
        clearInterval(abc);
        document.querySelector("#countdown").style.display = "none";
        document.querySelector("#stop").style.display = "flex";
    }
}

let abc = setInterval(countDownFunction, 1000);