//datos brutos
const estudiantes =[
    { nombre: "Ellie Williams", n1: 7.0, n2: 6.5, final: 6.8},
    { nombre: "Shanks Figarland", n1: 5.5, n2: 6.0, final: 5.8},
    { nombre: "Jone Doe", n1: 6.0, n2: 5.5, final: 5.8},
];

const tabla = document.getElementById("tabla-notas");

//renderizado
estudiantes.forEach(e => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${e.nombre}</td>
        <td>${e.n1}</td>
        <td>${e.n2}</td>
        <td>${e.final}</td>
    `;
    tabla.appendChild(fila);
});

function volver(){
    window.location.href = "dashboard.html";
}