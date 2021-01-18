var boton = document.getElementById('boton7'),
caja = document.getElementById('contenido-comentario'),
contador = 0;

function reaccion() {
    if (contador == 0) {
        contenido-comentario.classList.add('reaccion');
        contador = 1;
    } else {
        contenido-comentario.classList.remove('reaccion');
        contador = 0;
    }
}
boton.addEventListener('click', reaccion, true);


// Cambio de color Pry
const acoso = document.getElementById('acoso');
const comentario = document.getElementById('contenido-comentario1');
const wrapper = document.getElementById ('wrapper');
const meGusta = document.getElementsByClassName('me_gusta');
var contador = 0;

    function reaccion() {
        if (contador == 0) {
            comentario.style.backgroundColor= 'rgba(170, 10, 103, .3)'; 
            wrapper.style.opacity = '0';

            
            
            contador = 1;
        } else {
            comentario.style.backgroundColor= 'white';
            wrapper.style.opacity = '0';

            
            
            contador = 0;
        }
    }
    
    function mostrar(){
        var trozo = document.getElementById("wrapper2");
        trozo.style.visibility = "visible";
    }

    acoso.addEventListener('click', reaccion, true);

// **************
const acoso2 = document.getElementById('acoso2');
const comentario2 = document.getElementById('contenido-comentario2');

acoso2.addEventListener('click', (MouseEvent)=>{
    comentario2.style.backgroundColor= 'rgba(170, 10, 103, .3)';
})

