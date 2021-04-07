import React, { useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MovieModel from '../../models/movies'
/* styling */
import '../../styles/MovieCard.css'
function MovieCard () {
    /* refactor */
    const [ movies, setMovies] = useState([])


    useEffect(() => {
        fetchData();
    }, []) 

    const fetchData = () => {
        /* get all movies */
        MovieModel.allMovies().then(json => {
            setMovies(json)
          })
    }

    console.log(movies, "MOVIES FETCHED BY API")


    /* map out movies dynamically */

    let movieList = movies.map((movie) => {
        return <>
          <>
        <Card className="movieCardStyling">
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>{movie.date_published}</Card.Meta>
            <Card.Description>
                {movie.description}
            </Card.Description>
            <Card.Meta className="viewMovieDetail">
                <a>
                View Movie
                </a>
            </Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='star' />
                Average Rating {movie.avg_ratings}
            </a>
            <br/>
            <a>
                <Icon name='star' />
                Number Of Ratings: {movie.num_of_ratings}
            </a>
            </Card.Content>
        </Card>
       </>
        </>
    })


    return(
        <>

        {movies !== [] ? movieList :  <> <h1> There Are No Movies </h1> </>}
         
        </>
    )
}


export default MovieCard