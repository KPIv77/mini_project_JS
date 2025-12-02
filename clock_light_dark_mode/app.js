const timeEL = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconde = time.getSeconds()
    timeEL.innerHTML = 
    `${hours<10 ? `0${hours}` : hours}
    :${minutes<10 ? `0${minutes}`: minutes}
    :${seconde<10 ? `0${seconde}`: seconde}`
}
btnToggle.addEventListener("click", (e)=>{
    const html=document.querySelector('html')

    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML = "Dark mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "Light mode"
    }

})

setInterval(() => {
    setTime()
}, 1000);