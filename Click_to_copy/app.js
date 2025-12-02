const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")


btn.addEventListener("click", (e)=> {
    coupon.select()
    coupon.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="Copy done!!"
    setTimeout(()=> {
        btn.textContent= "Copy"
    }, 3000)
})