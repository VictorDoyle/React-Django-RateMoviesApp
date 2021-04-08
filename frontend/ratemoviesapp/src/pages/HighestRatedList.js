import React from 'react';
import MovieContainer from '../components/MovieContainer/MovieContainer';

function HighestRatedList() {
    return(
        <>
        <h1 style={{textAlign: "center", paddingTop: "50px"}}> Highest Rated Movies</h1>
        <MovieContainer />
        </>
        )
}

export default HighestRatedList