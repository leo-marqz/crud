import { cargarFormularioEditar } from './modulo.js';


const filas = document.querySelectorAll('.row');
filas.forEach((fila, indice) => {
    fila.addEventListener('click', () => {
        let data = filas[indice].children;
        console.log(data)
        cargarFormularioEditar(data)
    });
});