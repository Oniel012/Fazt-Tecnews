let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach( (element) => {

 element.addEventListener('click', (event) =>{

     enlaces.forEach((link) =>{
         link.classList.remove('activo');

     })
     event.target.classList.add('activo');
 })

})