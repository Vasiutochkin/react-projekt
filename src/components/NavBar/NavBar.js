import {Fragment, useState} from "react";
import './style.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const {toggle, setToggle} = useState()
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
                    <input type='text' placeholder='Search movies'/>
                    <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export {NavBar};