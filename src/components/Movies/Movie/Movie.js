import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {MoviesRating} from "../starRatings/StarRatings";

import {imageBaseUrl} from "../../../config";
import NoImg from './poster/NoPoster.jpg'
import {movieActions} from "../../../redux";

const Movie = ({movie}) => {

    const {original_title, poster_path, id, vote_average} = movie;

    const dispatch = useDispatch();

    return (
        <div className={'movie-card'}>

            <div>{original_title}</div>

            <Link to={id.toString()} onClick={() => dispatch(movieActions.getById({id}))}>
                <img src={poster_path ? `${imageBaseUrl}${poster_path}` : NoImg} alt={original_title}/>
            </Link>

            <MoviesRating vote_average={vote_average}/>
        </div>
    );
};

export {
    Movie
};