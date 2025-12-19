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
    const showtime = document.querySelector('.showtime');
    const shtime_Btn = document.querySelector('#shtime_Btn'); 

    shtime_Btn.addEventListener('click', () => {
        showtime.style.opacity = 1;
        document.querySelector(".stopwatch_page").classList.add("hidden");
        document.querySelector(".timers").classList.add("hidden");
        document.querySelector(".lab_start").classList.add("hidden");
        document.querySelector(".timers div span").classList.add("hidden");
    });
}

// Show Stop watch page (page 2)
function stop_watch () {
    const stopwatch = document.querySelector('.stopwatch_page');
    const stop_Btn = document.querySelector('#stop_Btn');

    stop_Btn.addEventListener('click', () => {
        stopwatch.style.opacity = 1;
        document.querySelector(".showtime").style.opacity = 0;
        document.querySelector(".lab_start").style.opacity = 1;
        document.querySelector(".timers").style.opacity = 0;

    });
}

// Show timer page (page 3)
function timer_page () {
    const timers = document.querySelector('.timers');
    const timers_Btn = document.querySelector('#timers_Btn');

    timers_Btn.addEventListener('click', () => {
        timers.style.opacity = 1;
        document.querySelector(".showtime").style.opacity = 0;
        document.querySelector(".stopwatch_page").style.opacity = 0;
    })
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
