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
const comentario = document.getElementById('contenido-comentario');

acoso.addEventListener('click', (MouseEvent)=>{
    comentario.style.backgroundColor= 'rgba(170, 10, 103, .3)';
})
