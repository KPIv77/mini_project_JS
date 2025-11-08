function time_update() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("showtime").innerText = time;
    console.log(time);
}

/*
function pad(n) {
    return n.toString().padStart(2, '0');
}

function count_time() {
    let hr = 0;
    let min = 0;
    let sec = 0;
    
    console.log(`${pad(hr)}:${pad(min)}:${pad(sec)} sec`);
}

count_time()

*/


setInterval(time_update, 1000)
time_update()