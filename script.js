const movies = [
    {
        name: "Homem-aranha",
        imageURL: "https://macmagazine.com.br/wp-content/uploads/2018/01/05-filme.jpg",
        date: "06-06-2017",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Vingadores Guerra Infinita",
        imageURL: "https://2.bp.blogspot.com/-ocyRhf7eju0/WsYYpTvNyKI/AAAAAAABRfk/eB7jcNild30uN8PkqQ8xRC06Iz1gNBYkgCKgBGAs/s1600/IMG_9230.JPG",
        date: "26-04-2018",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Five Nights",
        imageURL: "https://br.web.img2.acsta.net/pictures/23/06/27/21/17/2320488.jpg",
        date: "26-10-2023",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Coraline",
        imageURL: "https://m.media-amazon.com/images/I/911peZ9F14L._AC_UF1000,1000_QL80_.jpg",
        date: "13-02-2009",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Frankenweenie",
        imageURL: "https://m.media-amazon.com/images/M/MV5BMjIxODY3MjEwNV5BMl5BanBnXkFtZTcwOTMzNjc4Nw@@._V1_FMjpg_UX1000_.jpg",
        date: "02-11-2012",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Piratas do caribe",
        imageURL: "https://upload.wikimedia.org/wikipedia/pt/6/63/Pirates_of_the_Caribbean_-_On_Stranger_Tides.jpg",
        date: "29-08-2003",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "O estranho mundo de Jack",
        imageURL: "https://br.web.img3.acsta.net/medias/nmedia/18/90/48/68/20099172.jpg",
        date: "24-12-1993",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "A Noiva-Cadáver",
        imageURL: "https://br.web.img2.acsta.net/medias/nmedia/18/91/33/59/20140728.jpg",
        date: "21-10-2005",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Cruella",
        imageURL: "https://lumiere-a.akamaihd.net/v1/images/image_46443ba4.jpeg?region=0,0,540,810",
        date: "29-03-2021",
        price: 10,
        availableTickets: 100,
        inTheaters: true
    },
    {
        name: "Capitã Marvel",
        imageURL: "https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg",
        date: "07-05-2019",
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
        <h2 class="title-movie">${movie.name}</h2>
        <img src="${movie.imageURL}" alt="${movie.name}" class="movie-image">
        <p><strong>Data:</strong> ${movie.date}</p>
        ${movie.inTheaters ? `<p><strong>Lançamento:</strong> ${movie.releaseDate}</p>` : ''}
        <p><strong>Preço do Ticket:</strong> $${movie.price}</p>
        <p><strong>Tickets Disponíveis:</strong> ${movie.availableTickets}</p>
    `;

    moviesList.appendChild(movieCard);
});
