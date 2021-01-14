var boton = document.getElementById('boton7'),
caja = document.getElementById('comentario'),
contador = 0;

function reaccion() {
    if (contador == 0) {
        comentario.classList.add('reaccion');
        contador = 1;
    } else {
        comentario.classList.remove('reaccion');
        contador = 0;
    }
}
boton.addEventListener('click', reaccion, true);