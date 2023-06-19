function addComment(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("name");
    var commentInput = document.getElementById("comment");
    var commentList = document.getElementById("comment-list");
  
    var name = nameInput.value;
    var comment = commentInput.value;
  
    // Crear un nuevo elemento de comentario
    var commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = "<strong>" + name + "</strong>: " + comment;
  
    // Agregar el comentario a la lista
    commentList.appendChild(commentElement);
  
    // Limpiar los campos del formulario
    nameInput.value = "";
    commentInput.value = "";
  }
  
  // Escuchar el evento de envío del formulario
  var commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", addComment);