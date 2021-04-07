import React from 'react'
import '../../styles/MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

function MovieContainer()  {

    return(
<>
<div className="movieGridContainer">
    <div className="movieCardBox">
    <MovieCard />
    </div>
</div>
</>
    )
}

export default MovieContainer