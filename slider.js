
//Navigation

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
toggle.onclick = function(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//Day/Night

const dayNight = document.querySelector('.dayNight')
const body = document.querySelector('body')
dayNight.onclick = function () {
    dayNight.classList.toggle('active')
    body.classList.toggle('light')
}

//Slider
const slides = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')

function setActive(index){
    
   
    for (const slide of slides) {
        slide.classList.remove('active')
        slides[index].classList.add('active')
    }
    for (const dot of dots) {
        dot.classList.remove('active')
        dots[index].classList.add('active')
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', ()=>{
        setActive(i)
    })
}
