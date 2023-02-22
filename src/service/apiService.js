import {axiosService} from "./axiosService";
import {urlsMovie} from "../config";


const apiService = {
    getAll: ()=>axiosService.get(urlsMovie.movies),
    getById: (id)=>axiosService.get(`${urlsMovie.movieById}/${id}`),
    searchMovie: (value)=>axiosService.get(`${urlsMovie.searchMovie}=${value}`)
}

export {
    apiService
}