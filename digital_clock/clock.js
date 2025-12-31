class Actionpage {
    constructor() {
        this.clock_page = document.querySelector(".showtime");
        this.stopwatch_page = document.querySelector(".stopwatch_page");
        this.timers_page = document.querySelector(".timers");

        this.stopwatch_lab_start = document.querySelector(".lab_start");
        this.stopwatch_lab_stop = document.querySelector(".lab_stop_grid");
        this.stopwatch_lab_stop_span = document.querySelector(".lab_stop_grid span");


    }

    clearAll() {
        this.clock_page.classList.add("hidden");
        this.stopwatch_page.classList.add("hidden");
        this.timers_page.classList.add("hidden");
    }

    stopwatch_Btn() {
        this.stopwatch_lab_start.classList.add("hidden");
    }

    clearClass() {
        this.stopwatch_lab_start.classList.remove("hidden");
        this.stopwatch_lab_stop.classList.remove("show");
    }
}

// Show time present
function time_update() {
    const timeEL = document.querySelector(".time_present");
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconde = String(time.getSeconds()).padStart(2, '0');

    timeEL.textContent = `${hours}:${minutes}:${seconde}`;
}


// for show color button page current
function button_color_click () {
    const buttons_color = document.querySelectorAll('.button_grid span');

    buttons_color.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons_color.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Call function 
document.addEventListener("DOMContentLoaded", () => {

    const swapPage = new Actionpage();

    document.querySelector("#shtime_Btn").addEventListener("click", () => {

        swapPage.clearAll();
        swapPage.clock_page.classList.remove("hidden");
        swapPage.clock_page.classList.add("show");
    });

    document.querySelector("#stop_Btn").addEventListener("click", () => {

        swapPage.clearAll();
        swapPage.clearClass();
        swapPage.stopwatch_page.classList.remove("hidden");
        swapPage.stopwatch_page.classList.add("show");
        swapPage.stopwatch_lab_start.classList.add("button_click");
    });

    document.querySelector("#lab_start").addEventListener("click", () => {

        swapPage.stopwatch_Btn();
        swapPage.stopwatch_lab_stop.classList.add("show");
        swapPage.stopwatch_lab_stop.classList.add("button_click");
    });

    document.querySelector("#timers_Btn").addEventListener("click", () => {

        swapPage.clearAll();
        swapPage.clearClass();
        swapPage.timers_page.classList.remove("hidden");
        swapPage.timers_page.classList.add("show");
    });



    document.querySelector("#timers_Btn").addEventListener("click", () => {

        swapPage.clearAll();
        swapPage.clearClass();
        swapPage.timers_page.classList.remove("hidden");
        swapPage.timers_page.classList.add("show");
    });




    



    setInterval (() => {
        time_update();
    }, 1000);
    button_color_click();

});
