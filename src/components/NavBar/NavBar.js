import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {FormMovies} from "../FormMovies/FormMovies";
import {movieActions, toggleActions} from "../../redux";
import './style.css'


const NavBar = () => {

    const [toggle, setToggle] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleActions.getToggle(toggle))
    }, [toggle])

    return (
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className={'nav-options'}>
                <h1 id={toggle ? 'Movies' : 'heading'}>CINEMA ROOM</h1>

                <NavLink to={''} onClick={()=> dispatch(movieActions.getAll())}>
                    <span id={toggle ? '' : 'MoviesLight'}>Movies</span>
                </NavLink>

                <NavLink to={'tvShows'}>
                    <span id={toggle ? '' : 'MoviesLight'}>TV Shows</span>
                </NavLink>

                <NavLink to={'trending'}>
                    <span id={toggle ? '' : 'MoviesLight'}>Trending</span>
                </NavLink>

            </div>
            <div className='input-group'>

                <FormMovies/>

                <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                </div>

            </div>
        </nav>
    );
};

export {
    NavBar
};