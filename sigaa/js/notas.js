// js/notas.js

// Datos brutos de notas (distintos a los de cursos)
const notas = [
    { asignatura: "Programación Web", n1: 6.5, n2: 7.0, final: 6.8 },
    { asignatura: "Base de Datos", n1: 5.0, n2: 5.5, final: 5.3 },
    { asignatura: "Arquitectura de Sistemas", n1: 4.0, n2: 4.5, final: 4.3 }
]; 

const tabla = document.getElementById("tabla-notas");

// Renderizado correcto para las 4 columnas del HTML
notas.forEach(n => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${n.asignatura}</td>
        <td>${n.n1}</td>
        <td>${n.n2}</td>
        <td>${n.final}</td>
    `;
    tabla.appendChild(fila);
});

function volver() {
    window.location.href = "dashboard.html";
};