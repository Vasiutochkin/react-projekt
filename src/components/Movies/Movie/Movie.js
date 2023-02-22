import {movieActions} from "../../../redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {imageBaseUrl} from "../../../config";
import picture from './'


const Movie = ({movie}) => {

    const {original_title, poster_path, id} = movie;

    const dispatch = useDispatch();

    return (
        <div className={'movie-card'}>

            <div>{original_title}</div>

            <Link to={id.toString()} onClick={() => dispatch(movieActions.getById({id}))}>
                {poster_path ?
                    <img className={'movie-cover'} src={`${imageBaseUrl}${poster_path}`} alt={original_title}/>
                    :
                    // вставити картинку
                    <img src={require("picture/movies.jpg")} alt={original_title}/>
                    // <img src={picture} alt={original_title}/>
                    // <div>ffffffffffffeeeeeeeeeeeeeeeeeeee</div>

                }
            </Link>
        </div>
    );
};

export {Movie};