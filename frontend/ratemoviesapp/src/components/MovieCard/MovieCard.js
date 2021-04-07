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


    return(
        <>
            <Card>
                <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>MOVIE TITLE</Card.Header>
                <Card.Meta>DATE OF PUBLISH</Card.Meta>
                <Card.Description>
                    Movie Description
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='star' />
                    Average Rating
                </a>
                </Card.Content>
            </Card>
        </>
    )
}


export default MovieCard