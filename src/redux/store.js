import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";


const rootReducers = combineReducers({
    movies: movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducers
});
export {
    setupStore
}