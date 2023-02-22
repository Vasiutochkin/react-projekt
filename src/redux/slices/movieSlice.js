import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {apiService} from "../../service";

const initialState = {
    movies: [],
    selectMovies: null,
    moviesSearch: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await apiService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlices/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await apiService.getById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSearch = createAsyncThunk(
    'movieSlice/search',
    async ({value}, thunkAPI) => {
        try {
            const {data} = await apiService.searchMovie(value);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectMovies = action.payload
            })
            .addCase(moviesSearch.fulfilled, (state, action) => {
                state.movies = action.payload
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById,
    moviesSearch
}

export {
    movieReducer,
    movieActions
}