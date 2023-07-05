document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll("nav.nav-2C a").forEach(element => {
      const nombre = element.getAttribute("data-nombre");
      if (nombre.toLowerCase().includes(e.target.value.toLowerCase())) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
});