//datos notas
const notas = [
    { ramo: "Programación Web", n1: 6.0, n2: 5.5, final: 5.8 },
    { ramo: "Base de Datos", n1: 5.5, n2: 6.0, final: 5.8 },
    { ramo: "Arquitectura de Sistemas", n1: 7.0, n2: 6.5, final: 6.8 },
    { ramo: "Modelamiento de Negocios", n1: 6.5, n2: 6.0, final: 6.2 },
    { ramo: "Ética Profesional", n1: 7.0, n2: 6.7, final: 6.8 }
];

const tabla = document.getElementById("tabla-notas");

//renderizado filas notas
notas.forEach(n => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${n.ramo}</td>
        <td>${n.n1}</td>
        <td>${n.n2}</td>
        <td>${n.final}</td>
    `;

    tabla.appendChild(fila);
});

function volver() {
    window.location.href = "dashboard.html";
}