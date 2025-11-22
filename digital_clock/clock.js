function time_update() {

    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("showtime").innerText = time;
    console.log(time);
}

function buttons () {
    const mainBtn = document.querySelector(".main-btn");
    const subBtns = document.querySelectorAll(".sub-btn");

    mainBtn.addEventListener('click', () => {
        subBtns.forEach(btn => btn.classList.toggle('show'));
        mainBtn.classList.toggle("hide");   
    });

    subBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mainBtn.classList.remove("hide");
            subBtns.forEach(b => b.classList.remove("show"));
            console.log(btn.textContent + " clicked");
        });
    });

}


document.addEventListener("DOMContentLoaded", () => {
    time_update();
    setInterval(time_update, 1000);
    buttons();
});