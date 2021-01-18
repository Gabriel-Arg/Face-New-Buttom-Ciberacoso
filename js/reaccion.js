    // Cambio de color Pry
    // Funcion para el cambio de color del comentario1
    const acoso = document.getElementById('acoso');
    const comentario = document.getElementById('contenido-comentario1');

    var contador = 0;

    function reaccion() {
        if (contador == 0) {
            comentario.style.backgroundColor= 'rgba(170, 10, 103, .3)';  
            contador = 1;
        } else {
            comentario.style.backgroundColor= '#f0efef';
            contador = 0;
        }
    }
        acoso.addEventListener('click', reaccion, true);
    
        acoso.addEventListener('click', ()=>{
        wrap2.classList.toggle('display2');
    });

    const acoso2 = document.getElementById('acoso2');
    const comentario2 = document.getElementById('contenido-comentario2');

    // Funcion para el cambio de color de la respuesta al comentario1
    function reaccion2() {
        if (contador == 0) {
            comentario2.style.backgroundColor= 'rgba(170, 10, 103, .3)';  
            contador = 1;
        } else {
            comentario2.style.backgroundColor= '#f0efef';
            contador = 0;
        }
    }
        acoso2.addEventListener('click', reaccion2, true);   
        acoso2.addEventListener('click', ()=>{
        wrap3.classList.toggle('display3');
    });

    const acoso3 = document.getElementById('acoso3');
    const comentario3 = document.getElementById('contenido-comentario3');

    // Funcion para el cambio de color del comentario2
    function reaccion3() {
        if (contador == 0) {
            comentario3.style.backgroundColor= 'rgba(170, 10, 103, .3)';  
            contador = 1;
        } else {
            comentario3.style.backgroundColor= '#f0efef';
            contador = 0;
        }
    }
        acoso3.addEventListener('click', reaccion3, true);   
        acoso3.addEventListener('click', ()=>{
        wrap4.classList.toggle('display4');
    });

    const acoso4 = document.getElementById('acoso4');
    const comentario4 = document.getElementById('contenido-comentario4');

    // Funcion para el cambio de color del comentario3
    function reaccion4() {
        if (contador == 0) {
            comentario4.style.backgroundColor= 'rgba(170, 10, 103, .3)';  
            contador = 1;
        } else {
            comentario4.style.backgroundColor= '#f0efef';
            contador = 0;
        }
    }
        acoso4.addEventListener('click', reaccion4, true);   
        acoso4.addEventListener('click', ()=>{
        wrap5.classList.toggle('display5');
    });

    const acoso5 = document.getElementById('acoso5');
    const comentario5 = document.getElementById('contenido-comentario5');

    // Funcion para el cambio de color de la respuesta al comentario1
    function reaccion5() {
        if (contador == 0) {
            comentario5.style.backgroundColor= 'rgba(170, 10, 103, .3)';  
            contador = 1;
        } else {
            comentario5.style.backgroundColor= '#f0efef';
            contador = 0;
        }
    }
        acoso5.addEventListener('click', reaccion5, true);   
        acoso5.addEventListener('click', ()=>{
        wrap6.classList.toggle('display6');
    });

