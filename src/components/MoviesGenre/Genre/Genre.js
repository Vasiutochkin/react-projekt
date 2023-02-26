import './generStyle.css'
import {genresActions, movieActions} from "../../../redux";
import {useDispatch} from "react-redux";

const Genre = ({genre}) => {
    const {id, name} = genre;

    const dispatch = useDispatch();

    return (
        <div className={'tag'} onClick={() => dispatch(movieActions.movieGenresId({id}))}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};