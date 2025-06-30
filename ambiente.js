function cursos() {
    let lista = document.getElementById("lista");
    let cursos = [
        { id: 1, curso: "Inglês" },
        { id: 2, curso: "Espanhol" },
        { id: 3, curso: "Alemão" },
        { id: 4, curso: "Mandarim" },
    ];

    lista.innerHTML = "Os cursos que temos são:";

    let ul = document.createElement("ul");

    cursos.forEach(function (CURSO) {
        let li = document.createElement("li");
        li.textContent = CURSO.curso + " ID: " + CURSO.id;
        ul.appendChild(li);
    });

    lista.appendChild(ul);
}

function ocultcursos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; 
}