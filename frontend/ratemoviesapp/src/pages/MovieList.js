import React from 'react';
import MovieContainer from '../components/MovieContainer/MovieContainer';

function MovieList() {
    return(
        <>
        <h1 style={{textAlign: "center", paddingTop: "50px"}}> All Movies</h1>
        <MovieContainer />
        </>
        )
}

export default MovieList