import {imageBaseUrl} from "../../config";
import NoImg from "../Movies/Movie/poster/NoPoster.jpg";

const MovieDetails = ({selectMovies}) => {
    const {original_title, poster_path} = selectMovies;

    return (
        <div>
            MovieDetails
            <h2>ВИВОДИМО ДЕТАЛЬНУ ІНФОРМАЦІЮ ПРО ФІЛЬМ</h2>
            <h1>{original_title}</h1>
            <img src={poster_path ? `${imageBaseUrl}${poster_path}` : NoImg} alt={original_title}/>
        </div>
    );
};

export {MovieDetails};