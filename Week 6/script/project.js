const moviesContainer = document.getElementById("movies");

// Loop through the movies array and create HTML elements for each movie
movies.forEach((movie) => {
    
    const movieDiv = document.createElement("div");
    const movieName = document.createElement("h2");
    const movieYear = document.createElement("p");
    const movieRating = document.createElement("p");
    const movieImage = document.createElement("img");

    movieName.textContent = movie.name;
    movieYear.textContent = `Year: ${movie.year}`;
    movieRating.textContent = `Rating: ${movie.rating}`;
    movieImage.src = movie.image;

    movieDiv.appendChild(movieName);
    movieDiv.appendChild(movieYear);
    movieDiv.appendChild(movieRating);
    movieDiv.appendChild(movieImage);

    moviesContainer.appendChild(movieDiv);

});