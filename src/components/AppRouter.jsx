import React from 'react'
import About from './../pages/About'
import Posts from './../pages/Posts'
import Error from './../pages/Error'
import { Redirect, Route, Switch } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/posts'>
                <Posts />
            </Route>
            <Route>
                <Error path='/error' />
            </Route>
            <Redirect to='/error' />
        </Switch>

    )


}
export default AppRouter