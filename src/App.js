import {Route, Routes} from "react-router-dom";

import {MoviesGenre, NavBar} from "./components";
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
                    <Route path=':movieId' element={<MovieDetailsPage/>}/>
                </Routes>
            </div>
    );
};

export {App};