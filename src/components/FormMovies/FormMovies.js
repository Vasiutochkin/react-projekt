import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";

const FormMovies = () => {

    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        if (e.target.value === '') {
            dispatch(movieActions.getAll())
        } else {
            dispatch(movieActions.moviesSearch({value: e.target.value}))
        }
    }
    return (
        <form>
            <input type="text" placeholder={'Search whatever you want '} name={'movies'} onChange={formHandler}/>
        </form>
    );
};

export {FormMovies};
