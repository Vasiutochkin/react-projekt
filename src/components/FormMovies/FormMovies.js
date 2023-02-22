import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const FormMovies = () => {

    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(movieActions.moviesSearch({value: e.target.value}))

    }
    return (
        <form>
            <input type="text" name={'movies'} onChange={formHandler}/>
        </form>
    );
};

export {FormMovies};
