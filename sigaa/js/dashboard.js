// Si no hay usuario guardado, mandar al login de una
if (!localStorage.getItem("tipoUsuario")) {
    window.location.href = "index.html";
}

//obtener tipo usuario desde login
const tipo = localStorage.getItem("tipoUsuario");
document.getElementById("tipo").textContent = "Perfil: " + tipo;

//añadir botones
const contenedor = document.getElementById("opciones");

let botones = [];

//según tipo usuario
if (tipo === "alumno") {
    botones = [
        { texto: "Matrícula", link: "matricula.html" },
        { texto: "Notas", link: "notas.html" },
        { texto: "Pagos", link: "pagos.html" },
        { texto: "Certificados", link: "certificados.html" }
    ];
}

if (tipo === "docente"){
    botones = [
        { texto: "Mis cursos", link: "mis-cursos.html"},
        { texto: "Subir notas", link: "subir-notas.html"},
        { texto: "Asistencia", link: "#"}
    ];
}

if (tipo === "admin") {
    botones = [
        { texto: "Gestión Usuarios", link:"gestion-usuarios.html"},
        { texto: "Reportes", link:"#"},
        { texto: "Pagos", link:"pagos.html"},
        { texto: "Configuraciones", link:"#"}
    ];
}

//renderizado botones

botones.forEach(b => {
    let btn = document.createElement("button");
    btn.className = "opcion-btn";
    btn.textContent = b.texto;
    btn.onclick = () => window.location.href = b.link;
    contenedor.appendChild(btn);
});

//cerrar sesión

function logout() {
    localStorage.removeItem("tipoUsuario");
    window.location.href = "index.html";
}