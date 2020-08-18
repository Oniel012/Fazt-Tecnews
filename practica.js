let age = 19
let Direccion = 'Las americas';
let nombre = 'Oniel';
let mensaje= "Saludos"+" "+nombre+' Tienes '+age+' y eres de: '+Direccion;
let btn = document.getElementById('btn').addEventListener('click', () =>{
    let max= 100;
    let min = 1;
    let enigma = Math.random()*(min+max);
    enigma = Math.round(enigma);
    console.log(enigma);
    mensaje = 'Vienvenidos, elija un numero del 1 al 100, elija 0 para salir del juego';
    while(true){
        let users = prompt(mensaje, "0");
        users = parseInt(users);
        if(users === enigma){
            alert('Felicidades, ha sido el ganador')
            break;
        } else if(users === 0){
            alert('Hasta luego');
            break;
        }else if(users > enigma){
            mensaje = 'Lo sentimos el numero es menor al indicado'
        }else if(users < enigma){
            mensaje= 'Lo sentimos, el numero magico es mayor';
        }else{
            mensaje='Recuerde que solo se admiten numeros en el rango establecido';
        }
    
    }
})
let content = document.getElementById('container');
content.innerHTML = `<h2>${mensaje}</h2>
<li>${age}</li>

`;

