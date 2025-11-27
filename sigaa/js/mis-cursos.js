//datos brutos
const cursos = [
    { nombre: "Programación Web", estado: "En curso"},
    { nombre: "Base de Datos", estado: "En curso"},
    { nombre: "Arquitectura de Sistemas", estado: "Pendiente"},
]; 

const tabla = document.getElementById("tabla-cursos");

//renderizado
cursos.forEach(c => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${c.nombre}</td>
        <td>${c.estado}</td>
    `;
    tabla.appendChild(fila);
});

function volver() {
    window.location.href = "dashboard.html";
};
