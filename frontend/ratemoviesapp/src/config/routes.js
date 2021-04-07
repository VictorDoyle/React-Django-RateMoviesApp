import React from 'react'
import {Switch, Route} from 'react-router-dom'

/* Pages */
import Homepage from '../pages/Homepage'
import MovieList from '../pages/MovieList'


export default(
 <Switch>
     <Route exact path='/' component={ Homepage } />
     <Route path='/movies' component = {MovieList} />
 </Switch>

)