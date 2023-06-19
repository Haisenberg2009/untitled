window.addEventListener("DOMContentLoaded", function() {
    var movies = [
      {
        title: "Pelicula 1",
        image: "ruta/a/imagen1.jpg",
        description: "Descripción de la película 1",
        genre: "Género 1",
        director: "Director 1",
        year: 2021
      },
      {
        title: "Pelicula 2",
        image: "ruta/a/imagen2.jpg",
        description: "Descripción de la película 2",
        genre: "Género 2",
        director: "Director 2",
        year: 2022
      },
      // Agrega más películas aquí
    ];
    
    var moviesContainer = document.getElementById("movies-container");
    
    // Generar el contenido del catálogo
    movies.forEach(function(movie) {
      var movieCard = document.createElement("div");
      movieCard.className = "movie-card";
      
      var movieImage = document.createElement("img");
      movieImage.src = movie.image;
      movieCard.appendChild(movieImage);
      
      var movieTitle = document.createElement("h2");
      movieTitle.textContent = movie.title;
      movieCard.appendChild(movieTitle);
      
      var movieDescription = document.createElement("p");
      movieDescription.textContent = movie.description;
      movieCard.appendChild(movieDescription);
      
      var movieDetails = document.createElement("div");
      movieDetails.className = "movie-details";
      
      var genreSpan = document.createElement("span");
      genreSpan.textContent = "Género: " + movie.genre;
      movieDetails.appendChild(genreSpan);
      
      var directorSpan = document.createElement("span");
      directorSpan.textContent = "Director: " + movie.director;
      movieDetails.appendChild(directorSpan);
      
      var yearSpan = document.createElement("span");
      yearSpan.textContent = "Año: " + movie.year;
      movieDetails.appendChild(yearSpan);
      
      movieCard.appendChild(movieDetails);
      
      moviesContainer.appendChild(movieCard);
    });
  });