// --- SEGURIDAD DE SESIÓN (Anti-Back Button) ---
function verificarSesion() {
    // Si NO hay usuario guardado, patear al login
    if (!localStorage.getItem("tipoUsuario")) {
        window.location.replace("index.html"); // .replace evita guardar historial
    }
}

// 1. Verificar apenas carga el script
verificarSesion();

// 2. Verificar si el usuario vuelve usando el botón "Atrás"
window.addEventListener('pageshow', function(event) {
    verificarSesion();
});
// ----------------------------------------------


//obtener tipo usuario desde login
const tipo = localStorage.getItem("tipoUsuario");

// Un pequeño safety check por si 'tipo' es null para que no rompa el textContent
if (tipo) {
    document.getElementById("tipo").textContent = "Perfil: " + tipo;
}

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
// Limpiamos el contenedor antes por si acaso
if(contenedor) {
    contenedor.innerHTML = ""; 
    botones.forEach(b => {
        let btn = document.createElement("button");
        btn.className = "opcion-btn";
        btn.textContent = b.texto;
        btn.onclick = () => window.location.href = b.link;
        contenedor.appendChild(btn);
    });
}

//cerrar sesión
function logout() {
    localStorage.removeItem("tipoUsuario");
    window.location.replace("index.html"); // Usamos replace aquí también para más seguridad
}