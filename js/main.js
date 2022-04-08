const slide = document.querySelectorAll(".slider-content-item")
const neXt = document.querySelector(".fa-arrow-right")
const preV = document.querySelector(".fa-arrow-left")
let index = 0;

neXt.addEventListener("click", function(){
    slide[index].classList.remove('active')
    index = (index + 1) % slide.length
    slide[index].classList.add('active')
})
preV.addEventListener("click", function(){
    slide[index].classList.remove('active')
    index = (index - 1 + slide.length)% slide.length
    slide[index].classList.add('active')
})