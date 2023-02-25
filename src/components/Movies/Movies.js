import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "./Movie/Movie";
import './moviesStyle.css'
import {MoviesGenre} from "../MoviesGenre/MoviesGenre";

const Movies = () => {

    const {toggle} = useSelector(state => state.toggleReducer);

    const {movies} = useSelector(state => state.movies);
    const {results} = movies;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [])

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