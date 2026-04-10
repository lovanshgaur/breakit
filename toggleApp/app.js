let toggle = document.getElementById("toggle");
let toggleBall = document.getElementById("toggleBall");
let container = document.getElementById('container')

toggle.addEventListener("click", () => {
    container.classList.toggle('light')

});
