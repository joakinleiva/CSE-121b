const movies = [
  {
    name: "Inception",
    year: 2010,
    rating: 8.8,
    cover: "https://www.imdb.com/title/tt1375666/mediaviewer/rm2499739649"
  },
  {
    name: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    cover: "https://www.imdb.com/title/tt0468569/mediaviewer/rm3838459648/"
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    cover: "https://www.imdb.com/title/tt0120737/mediaviewer/rm2300568832"
  },
  {
    name: "Interstellar",
    year: 2014,
    rating: 8.6,
    cover: "https://www.imdb.com/title/tt0816692/mediaviewer/rm3228691200"
  },
  {
    name: "The Godfather",
    year: 1972,
    rating: 9.2,
    cover: "https://www.imdb.com/title/tt0068646/mediaviewer/rm1078490624/"
  },
  {
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    cover: "https://www.imdb.com/title/tt0111161/mediaviewer/rm3553432064/"
  },
  {
    name: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    cover: "https://www.imdb.com/title/tt0109830/mediaviewer/rm2300753152"
  },
  {
    name: "The Matrix",
    year: 1999,
    rating: 8.7,
    cover: "https://www.imdb.com/title/tt0133093/mediaviewer/rm2929776640"
  },
  {
    name: "Fight Club",
    year: 1999,
    rating: 8.8,
    cover: "https://www.imdb.com/title/tt0137523/mediaviewer/rm206220416"
  },
  {
    name: "Gladiator",
    year: 2000,
    rating: 8.5,
    cover: "https://www.imdb.com/title/tt0172495/mediaviewer/rm2366639360"
  },
  {
    name: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    cover: "https://www.imdb.com/title/tt0110912/mediaviewer/rm2084548608"
  },
  {
    name: "The Silence of the Lambs",
    year: 1991,
    rating: 8.6,
    cover: "https://www.imdb.com/title/tt0102926/mediaviewer/rm4182595584"
  },
  {
    name: "Goodfellas",
    year: 1990,
    rating: 8.7,
    cover: "https://www.imdb.com/title/tt0099685/mediaviewer/rm426491136"
  },
  {
    name: "Saving Private Ryan",
    year: 1998,
    rating: 8
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



