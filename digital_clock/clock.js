// Show time present
function time_update() {
    const timeEL = document.querySelector(".time_present");
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconde = String(time.getSeconds()).padStart(2, '0');

    timeEL.textContent = `${hours}:${minutes}:${seconde}`;
}

// Show clock page (page 1)
function clock_page() {
    const shtime_Btn = document.querySelector('#shtime_Btn'); 

    shtime_Btn.addEventListener('click', () => {

        // remove page stopwatch and timers
        document.querySelector(".stopwatch_page").classList.remove("show");
        document.querySelector(".timers").classList.remove("show");

        // show page clock
        document.querySelector(".showtime").classList.remove("hidden");
    });
}

// Show Stop watch page (page 2)
function stop_watch () {

    const stop_Btn = document.querySelector('#stop_Btn');


    stop_Btn.addEventListener('click', () => {

        // remove page timers and clock
        document.querySelector(".showtime").classList.add("hidden");
        document.querySelector(".timers").classList.remove("show");

        // show page stopwatch page
        document.querySelector(".stopwatch_page").classList.add("show");

        // add button lab_start
        document.querySelector(".lab_start span").classList.add("button_show");

    });
}

// Show timer page (page 3)
function timer_page () {
    const timers_Btn = document.querySelector('#timers_Btn');

    timers_Btn.addEventListener('click', () => {

        // remove page stopwatch and clock
        document.querySelector(".showtime").classList.add("hidden");
        document.querySelector(".stopwatch_page").classList.remove("show");

        // show page timers page
        document.querySelector(".timers").classList.add("show");


        

    });
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
    setInterval (() => {
        time_update();
    }, 1000);
    clock_page();
    stop_watch();
    timer_page();
    button_color_click();

});
