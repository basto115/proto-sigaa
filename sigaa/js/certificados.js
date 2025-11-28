//datos certificado

const certificados = [
    { curso: "Alumno Regular", estado: "Disponible", link: "#"},
    { curso: "Notas Parciales", estado: "Disponible", link: "#"},
    { curso: "Título en Trámite", estado: "Pendiente", link: "#"},
    { curso: "Concentración de Notas", estado: "Bloqueo Financiero", link: "#"},
    { curso: "Progreso Académico", estado: "Disponible", link: "#"},
];

const tabla = document.getElementById("tabla-certificados");

//renderizar tablas
certificados.forEach(c => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${c.curso}</td>
        <td>${c.estado}</td>
        <td><a href="${c.link}" class="download-link" ${c.estado === "Disponible" ? "" : "disabled"}>Descargar</a></td>
    `;

    tabla.appendChild(fila);
});

function volver() {
    window.location.href = "dashboard.html";
}