//datos para pagos
const pagos = [
    { fecha: "2025-05-10", monto: "$"+120000,  estado: "Pagado"},
    { fecha: "2025-06-15", monto: "$"+120000,  estado: "Pendiente"},
    { fecha: "2025-07-20", monto: "$"+120000,  estado: "Pagado"},
    { fecha: "2025-08-05", monto: "$"+120000,  estado: "Pendiente"}
];

const tabla = document.getElementById("tabla-pagos");

//renderizar tabla pagos
pagos.forEach(p => {
    let fila = document.createElement("tr")

    fila.innerHTML = `
        <td>${p.fecha}</td>
        <td>${p.monto}</td>
        <td>${p.estado}</td>
    `;

    tabla.appendChild(fila);
});

//volver al dashboard
function volver() {
    window.location.href = "dashboard.html";
}