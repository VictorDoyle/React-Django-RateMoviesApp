import React from 'react'
import { Grid } from 'semantic-ui-react'
import MovieCard from '../MovieCard/MovieCard'

function MovieContainer()  {

    return(
<>
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column>
            <MovieCard />
        </Grid.Column>

        <Grid.Column>
            <MovieCard />
        </Grid.Column>
        </Grid.Row>
    </Grid>
</>
    )
}

export default MovieContainer