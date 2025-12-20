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

    const timer_class = document.querySelector('.timers div span');
    const stopwatch_class = document.querySelector('.lab_start span');
    const shtime_Btn = document.querySelector('#shtime_Btn'); 

    shtime_Btn.addEventListener('click', () => {

        // remove page stopwatch and timers
        document.querySelector(".stopwatch_page").classList.remove("show");
        document.querySelector(".timers").classList.remove("show");

        // show page clock
        document.querySelector(".showtime").classList.remove("hidden");

        
        // hide lab start and timers class
        timer_class.style.pointerEvents = 'none';
        timer_class.style.cursor = 'default';

        stopwatch_class.style.pointerEvents = 'none';
        stopwatch_class.style.cursor = 'default';

        document.querySelector(".lab_stop_grid").classList.remove("show", "button_show");


    });
}

// Show Stop watch page (page 2)
function stop_watch () {

    const stopwatch_class = document.querySelector('.lab_start span');
    const stop_Btn = document.querySelector('#stop_Btn');

    stop_Btn.addEventListener('click', () => {

        // remove page timers and clock
        document.querySelector(".showtime").classList.add("hidden");
        document.querySelector(".timers").classList.remove("show");

        // show page stopwatch page
        document.querySelector(".stopwatch_page").classList.add("show");

        // add button lab_start class remove timers class

        document.querySelector('.timers div').classList.add('hidden');
        document.querySelector('.lab_start').classList.remove('hidden');

        stopwatch_class.style.pointerEvents = 'auto';
        stopwatch_class.style.cursor = 'pointer';

    });
}

// Show grid class lab_stop_grid
function grid_lab_stop () {

    const grid_lab_stop_class = document.querySelector('.lab_stop_grid span');
    const start_Btn = document.querySelector("#start");
    const stopwatch_class = document.querySelector('.lab_start span');

    start_Btn.addEventListener('click', () => {

        console.log("tets");

        document.querySelector(".reset_start_grid").classList.add("hidden");
        document.querySelector(".lab_start").classList.add("hidden");
        document.querySelector(".lab_stop_grid").classList.add("show");
        document.querySelector(".lab_stop_grid span").classList.add("button_show");

        stopwatch_class.style.pointerEvents = 'none';
        stopwatch_class.style.cursor = 'default';


    });


}

// Show timer page (page 3)
function timer_page () {

    const timer_class = document.querySelector('.timers div span');
    const timers_Btn = document.querySelector('#timers_Btn');

    timers_Btn.addEventListener('click', () => {

        // remove page stopwatch and clock
        document.querySelector(".showtime").classList.add("hidden");
        document.querySelector(".stopwatch_page").classList.remove("show");

        // show page timers page
        document.querySelector(".timers").classList.add("show");

        // add button timers class remove lab_start class

        document.querySelector('.lab_start').classList.add('hidden');
        document.querySelector('.timers div').classList.remove('hidden');

        timer_class.style.pointerEvents = 'auto';
        timer_class.style.cursor = 'pointer';

    document.querySelector(".lab_stop_grid").classList.remove("show", "button_show");

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
    grid_lab_stop();

});
