// datos brutos
const users = [
    { user: "alumno", pass: "1234", tipo: "alumno"},
    { user: "docente", pass: "5678",  tipo: "docente" },
    {user: "admin", pass: "1234", tipo: "admin" }
];

function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;
    const error = document.getElementById("error");

    const encontrado = users.find(x => x.user === u && x.pass === p)

    if(!encontrado) {
        error.textContent = "Usuario o contraseña incorrectos";
        return;
    }

    //guardar el tipo de usuario
    localStorage.setItem("tipoUsuario", encontrado.tipo);

    //redirigir dashboard
    window.location.href = "dashboard.html"
}