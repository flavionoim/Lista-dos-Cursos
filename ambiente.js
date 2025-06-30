function cursos() {
    let lista = document.getElementById("lista");
    let cursos = ["Inglês", "Espanhol", "Alemão", "Mandarim"];
  
    lista.innerHTML = "Os cursos que temos são:";
  
    let ul = document.createElement("ul");
  
    cursos.forEach(function (curso) {
      let li = document.createElement("li");
      li.textContent = curso;
      ul.appendChild(li);
    });
  
    lista.appendChild(ul);
  }


  function ocultcursos() {
    lista.innerHTML = ''
  }
