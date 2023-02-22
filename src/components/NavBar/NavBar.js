import {Fragment} from "react";
import './style.css'
import {NavLink} from "react-router-dom";
import {FormMovies} from "../FormMovies/FormMovies";

const NavBar = () => {
    return (
        <Fragment>
            <nav className={''}>
                <div className={'nav-options'}>
                    <h1>CINEMA ROOM</h1>
                    <NavLink to={''}><span>Movies</span></NavLink>
                    <NavLink to={'genre'}><span>Movies genre</span></NavLink>
                    <NavLink to={'tvShows'}><span>TV Shows</span></NavLink>
                    <NavLink to={'trending'}><span>Trending</span></NavLink>
                </div>
                <div className='input-group'>
                    <FormMovies/>
                    <div id='Color-switcher'>
                        <div></div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export {NavBar};