import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";

const MoviesGenre = () => {

    const dispatch = useDispatch();


    // const formHandler = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     if (e.target.value === '') {
    //         dispatch(movieActions.getAll())
    //     } else {
    //         dispatch(movieActions.moviesSearch({value: e.target.value}))
    //     }
    //

    return (
        <div>
            MoviesGenre
            <h2>ТУТ МАЄ БУТИ ФІЛЬТРАЦІЯ ПО ЖАНТАМ</h2>

            <button onClick={()=>dispatch(movieActions.movieGenres('Action'))} >MOVIES GENRE</button>

        </div>
    );
};

export {MoviesGenre};
