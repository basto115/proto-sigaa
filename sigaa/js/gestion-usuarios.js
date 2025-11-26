const usuarios = [
    { usuario: "alumno", tipo: "alumno"},
    { usuario: "docente", tipo: "docente"},
    { usuario: "admin", tipo: "admin"},
];

const tabla = document.getElementById("tabla-usuarios");

function renderizarUsuarios() {
    tabla.innerHTML = "";
    usuarios.forEach(u => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${u.usuario}</td>
            <td>${u.tipo}</td>
            <td><button class="edit-btn" onclick="editarUsuario('${u.usuario}')">Editar</button> 
                <button class="delete-btn" onclick="eliminarUsuario('${u.usuario}')">Eliminar</button>
            </td>
        `;
        
        tabla.appendChild(fila);
    });
}

function agregarUsuario() {
    const usuario = prompt("ingrese al nombre del nuevo usuario:");
    if (usuario) {
        const tipo = prompt("Ingrese el tipo de usuario (alumno, docente, adminisitrador");
        if (tipo) {
            usuarios.push({ usuario, tipo});
            renderizarUsuarios();
        }
    }
}

function editarUsuario(usuario) {
    const nuevoTipo = prompt("Ingrese el nuevo tipo de usuario (alumno, docente, administrador)");
    if (nuevoTipo) {
        const index = usuarios.findIndex(u => u.usuario === usuario);
        if (index !== -1) {
            usuarios[index].tipo = nuevoTipo;
            renderizarUsuarios();
        }
    }
}

function eliminarUsuario(usuario) {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al usuario ${usuario}?`);
    if (confirmacion) {
        const index = usuarios.findIndex( u => u.usuario === usuario);
        if (index !== -1) {
            usuarios.splice(index, 1);
            renderizarUsuarios();
        }
    }
}

function volver() {
    window.location.href = "dashboard.html";
}

renderizarUsuarios();