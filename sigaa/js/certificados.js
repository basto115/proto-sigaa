//datos certificado

const certificados = [
    { curso: "Desarrollo de aplicaciones web", estado: "aprobado", link: "#"},
    { curso: "Introducción a la base de datos", estado: "aprobado", link: "#"},
    { curso: "Arquitectura de sistemas", estado: "pendiente", link: "#"},
    { curso: "Gestión de proyectos TI", estado: "aprobado", link: "#"},
    { curso: "Ética profesional", estado: "aprobado", link: "#"},
];

const tabla = document.getElementById("tabla-certificados");

//renderizar tablas
certificados.forEach(c => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${c.curso}</td>
        <td>${c.estado}</td>
        <td><a href="${c.link}" class="download-link" ${c.estado === "Aprobado" ? "" : "disabled"}>Descargar</a></td>
    `;

    tabla.appendChild(fila);
});

function volver() {
    window.location.href = "dashboard.html";
}