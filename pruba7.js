// Obtener el formulario y la sección de comentarios correspondiente
function addComment(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name-" + event.target.id.slice(-1));
  var commentInput = document.getElementById("comment-" + event.target.id.slice(-1));
  var commentList = document.getElementById("comment-section-" + event.target.id.slice(-1));

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
var commentForm1 = document.getElementById("comment-form-1");
commentForm1.addEventListener("submit", addComment);

var commentForm2 = document.getElementById("comment-form-2");
commentForm2.addEventListener("submit", addComment);

var commentForm3 = document.getElementById("comment-form-3");
commentForm3.addEventListener("submit", addComment);

var commentForm4 = document.getElementById("comment-form-4");
commentForm4.addEventListener("submit", addComment);
