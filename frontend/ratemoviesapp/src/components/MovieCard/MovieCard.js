import React, { useState } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function MovieCard () {
    const [ movieTitle, setMovieTitle] = useState("")
    const [ movieDatePublished, setMovieDatePublished ] = useState("")
    const [ movieDescription, setMovieDescription ] = useState("")
    const [ movieAvgRating, setMovieAvgRating] = useState("")

    
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