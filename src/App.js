import {MoviesGenre, NavBar} from "./components";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {MovieDetailsPage, MoviesPage, TrendingPage, TvShowsPage} from "./pages";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='' element={<MoviesPage/>}/>
                <Route path='/genre' element={<MoviesGenre/>}/>
                <Route path='/tvShows' element={<TvShowsPage/>}/>
                <Route path='/trending' element={<TrendingPage/>}/>

                <Route path='/:movieId' element={<MovieDetailsPage/>}/>
            </Routes>
            {/*<Route path={'*'} element={<NotFoundPage/>}/>*/}
        </div>
    );
};

export {App};