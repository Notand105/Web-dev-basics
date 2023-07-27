window.addEventListener("scroll", ()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const nav = document.querySelector('nav')

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active')
    nav.classList.toggle('active')
}
