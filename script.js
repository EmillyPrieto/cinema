const movies = [
    {
        name: "Homem-aranha",
        imageURL: "https://macmagazine.com.br/wp-content/uploads/2018/01/05-filme.jpg",
        date: "2023-11-01",
        releaseDate: "2023-10-20",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Vingadores Guerra Infinita",
        imageURL: "https://2.bp.blogspot.com/-ocyRhf7eju0/WsYYpTvNyKI/AAAAAAABRfk/eB7jcNild30uN8PkqQ8xRC06Iz1gNBYkgCKgBGAs/s1600/IMG_9230.JPG",
        date: "2023-11-01",
        releaseDate: "2023-10-20",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Capitã Marvel",
        imageURL: "https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg",
        date: "2023-11-01",
        releaseDate: "2023-10-20",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    }
    
];

const moviesList = document.getElementById("movies-list");

movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
        <h2>${movie.name}</h2>
        <img src="${movie.imageURL}" alt="${movie.name}" class="movie-image">
        <p><strong>Data:</strong> ${movie.date}</p>
        ${movie.inTheaters ? `<p><strong>Lançamento:</strong> ${movie.releaseDate}</p>` : ''}
        <p><strong>Preço do Ticket:</strong> $${movie.price}</p>
        <p><strong>Tickets Disponíveis:</strong> ${movie.availableTickets}</p>
    `;

    moviesList.appendChild(movieCard);
});
