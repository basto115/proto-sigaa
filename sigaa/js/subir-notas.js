let estudiantes = JSON.parse(localStorage.getItem("notas_data")) || [
    { nombre: "Ellie Williams", n1: "", n2: "" },
    { nombre: "Shanks Figarland", n1: "", n2: "" },
    { nombre: "Jon Doe", n1: "", n2: "" }, 
    { nombre: "Jane Doe", n1: "", n2: "" },
    { nombre: "", n1: "", n2: "" }
];

const tabla = document.getElementById("tabla-notas");

function renderizarTabla() {
    tabla.innerHTML = ""; 
    
    estudiantes.forEach((e, index) => {
        let fila = document.createElement("tr");


        let promedio = "-";
        let color = "#7f8c8d";
        
        if(e.n1 && e.n2) {
            let p = (parseFloat(e.n1) + parseFloat(e.n2)) / 2;
            promedio = p.toFixed(1);
            color = p < 4.0 ? "red" : "#2980b9";
        }

        fila.innerHTML = `
            <td>${e.nombre}</td>
            <td><input type="number" id="n1-${index}" value="${e.n1}" class="nota" placeholder="-" oninput="calcular(${index})"></td>
            <td><input type="number" id="n2-${index}" value="${e.n2}" class="nota" placeholder="-" oninput="calcular(${index})"></td>
            <td id="final-${index}" style="font-weight: bold; color: ${color};">${promedio}</td>
            <td><button onclick="guardarFila(${index})">💾</button></td>
        `;
        tabla.appendChild(fila);
    });
}

function calcular(index) {
    let nota1 = parseFloat(document.getElementById(`n1-${index}`).value);
    let nota2 = parseFloat(document.getElementById(`n2-${index}`).value);
    let celdaFinal = document.getElementById(`final-${index}`);

    if (!isNaN(nota1) && !isNaN(nota2)) {
        let promedio = (nota1 + nota2) / 2;
        celdaFinal.textContent = promedio.toFixed(1);
        
        if (promedio < 4.0) {
            celdaFinal.style.color = "red";
        } else {
            celdaFinal.style.color = "#2980b9";
        }
    } else {
        celdaFinal.textContent = "-";
        celdaFinal.style.color = "#7f8c8d";
    }
}


function guardarFila(index) {

    estudiantes.forEach((est, i) => {
        let n1 = document.getElementById(`n1-${i}`).value;
        let n2 = document.getElementById(`n2-${i}`).value;
        estudiantes[i].n1 = n1;
        estudiantes[i].n2 = n2;
    });


    localStorage.setItem("notas_data", JSON.stringify(estudiantes));

    alert("Notas guardadas correctamente. No se borrarán al recargar.");
}

function volver() {
    window.location.href = "dashboard.html";
}

renderizarTabla();