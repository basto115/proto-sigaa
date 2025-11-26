//dato bruto matricula
const asignaturas = [
    { nombre: "Programación web" ,estado: "Inscrita"},
    { nombre: "Base de datos" ,estado: "Inscrita"},
    { nombre: "Arquitectura de sistemas" ,estado: "Disponible"},
    { nombre: "Modelamiento de negocios" ,estado: "Disponible"},
    { nombre: "Ética profesional" ,estado: "Disponible"}
];

const tabla = document.getElementById("tabla-matricula");

//renderizado filas
asignaturas.forEach(a => {
    let fila = document.createElement("tr");

    fila.innerHTML =  `
        <td>${a.nombre}</td>
        <td>${a.estado}</td>
    `;

    tabla.appendChild(fila);
});

//volver dashboard
function volver() {
    window.location.href = "dashboard.html"
}