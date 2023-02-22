import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Movie} from "./Movie/Movie";

const Movies = () => {

    const {movies: {results}} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch])
    return (
        <div>
            <div className={'movies-card'}>
                {results && results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    Movies
}