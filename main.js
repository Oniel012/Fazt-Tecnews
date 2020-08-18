document.querySelector('.btn-menu').addEventListener('click', () => {
document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.card-banner-one', {delay: 500});
ScrollReveal().reveal('.card-banner-two', {delay: 500});

let enlaces = document.querySelectorAll('.list li a');
enlaces.forEach((contend)=>{
    contend.addEventListener('click', (event) =>{
        enlaces.forEach((link)=>{
            link.classList.remove('active')
        })
        event.target.classList.add('active');
    })
})
document.querySelector('btn-menu').addEventListener('click', () =>{
    document.querySelector('nav-menu').classList.toggle('show');
})





