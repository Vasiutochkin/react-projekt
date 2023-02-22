const baseURL = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const urlsMovie = {
    movies: '/discover/movie?page=2',
    movieById: '/movie',
    searchMovie: '/search/movie?query',

    genre: '/genre/movie/list'
}

export {
    baseURL,
    urlsMovie,
    imageBaseUrl
}