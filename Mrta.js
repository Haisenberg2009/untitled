// script.js

function addComment(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    var form = new FormData(event.target); // Obtener los datos del formulario
  
    var name = form.get("name"); // Obtener el valor del campo de nombre
    var comment = form.get("comment"); // Obtener el valor del campo de comentario
  
    var commentElement = document.createElement("div"); // Crear un nuevo elemento de comentario
    commentElement.classList.add("comment");
    commentElement.innerHTML = "<strong>" + name + "</strong>: " + comment;
  
    var commentList = document.getElementById("comment-list"); // Obtener la lista de comentarios
    commentList.appendChild(commentElement); // Agregar el comentario a la lista
  
    event.target.reset(); // Limpiar los campos del formulario
  }
  
  var commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", addComment);
  