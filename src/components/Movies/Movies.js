import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "./Movie/Movie";
import './moviesStyle.css'

const Movies = () => {

    const {toggle} = useSelector(state => state.toggleReducer);

    const {movies: {results}} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch])

    return (
        <div className={toggle === true ? 'mainBgColor' : 'secondaryBgColor'}>
            <div className={'movies-container'}>
                {results && results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    Movies
}