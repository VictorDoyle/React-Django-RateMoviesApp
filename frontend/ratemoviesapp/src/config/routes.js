import React from 'react'
import {Switch, Route} from 'react-router-dom'

/* Pages */
import Homepage from '../pages/Homepage'


export default(
 <Switch>
     <Route exact path='/' component={ Homepage } />
 </Switch>

)