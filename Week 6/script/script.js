const movies = [
  {
    name: "Inception",
    year: 2010,
    rating: 8.8,
    cover: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    cover: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    cover: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Interstellar",
    year: 2014,
    rating: 8.6,
    cover: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    name: "The Godfather",
    year: 1972,
    rating: 9.2,
    cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    cover: "https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"
  },
  {
    name: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    cover: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Matrix",
    year: 1999,
    rating: 8.7,
    cover: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Fight Club",
    year: 1999,
    rating: 8.8,
    cover: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Gladiator",
    year: 2000,
    rating: 8.5,
    cover: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    cover: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    name: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    cover: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "Goodfellas",
    year: 1990,
    rating: 8.7,
    cover: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    name: "Saving Private Ryan",
    year: 1998,
    rating: 8,
    cover: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg"
  },
  // Add more movies here...
];

// Function to show details of a randomly selected movie
function showRandomMovie() {
  // Get a random movie from the array
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  // Create HTML to display the movie details
  const movieDetailsHtml = `
    <h2>${randomMovie.name}</h2>
    <p>Year: ${randomMovie.year}</p>
    <p>Rating: ${randomMovie.rating}</p>
    <img src="${randomMovie.cover}" alt="${randomMovie.name}">
  `;

  // Display the movie details in the HTML
  const movieDetailsElement = document.getElementById("movieDetails");
  movieDetailsElement.innerHTML = movieDetailsHtml;
}



