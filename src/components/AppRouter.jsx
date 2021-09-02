import React from 'react'
import About from './../pages/About'
import Posts from './../pages/Posts'
import Error from './../pages/Error'
import { Redirect, Route, Switch } from 'react-router-dom'
import PostIdPage from '../pages/PostIdPage'
import {routes} from '../router/index'

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(item => <Route component={item.component} path={item.path} exact={item.exact}/>)}
            <Redirect to='/error' />
        </Switch>

    )


}
export default AppRouter