import {imageBaseUrl} from "../../config";
import css from './DetailStule.module.css'

const MovieDetails = ({selectMovies}) => {
    const {original_title, overview, poster_path} = selectMovies;


    return (
        <div>
            MovieDetails
            <h2>ВИВОДИМО ДЕТАЛЬНУ ІНФОРМАЦІЮ ПРО ФІЛЬМ</h2>
            <h1>{original_title}</h1>
            <img className={css.imgWidth} src={`${imageBaseUrl}/${poster_path}`} alt={original_title}/>
            <div>{overview}</div>
        </div>
    );
};

export {MovieDetails};