const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>  {
        const target = +counter.getAttribute("data-target")
        const start =+counter.innerText
        const incremant = target/200
        if(start<target) {
            counter.innerText = `${Math.ceil(start+incremant)}`
            setTimeout(updateCounter, 2)
        } else {
            counter.innerText=target
        }
    }

    updateCounter()
})
