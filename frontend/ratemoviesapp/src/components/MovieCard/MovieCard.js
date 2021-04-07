import React, { useState, useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MovieModel from '../../models/movies'

function MovieCard () {
    /* refactor */
    const [ movies, setMovies] = useState([])

    const [ movieTitle, setMovieTitle] = useState("")
    const [ movieDatePublished, setMovieDatePublished ] = useState("")
    const [ movieDescription, setMovieDescription ] = useState("")
    const [ movieAvgRating, setMovieAvgRating] = useState("")

    useEffect(() => {
        fetchData();
    }, []) 

    const fetchData = () => {
        /* get all movies */
        MovieModel.allMovies().then(json => {
            console.log(json, "fetched Movies From API")
            setMovies(json)
          })
    }

    console.log(movies, "MOVIES")


    /* map out movies dynamically */

    let movieList = movies.map((movie) => {
        return <>
          <>
        <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta>{movie.date_published}</Card.Meta>
            <Card.Description>
                {movie.description}
            </Card.Description>
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

        {movies ? movieList :  <> <h1> There Are No Movies </h1> </>}
         
        </>
    )
}


export default MovieCard