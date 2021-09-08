import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../context'
import { publicRoutes, privateRoutes } from '../router/index'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)
    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(item => <Route key={item.path} component={item.component} path={item.path} exact={item.exact} />)}
                <Redirect to='/posts' />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(item => <Route key={item.path} component={item.component} path={item.path} exact={item.exact} />)}
                <Redirect to='/login' />
            </Switch>
    )


}
export default AppRouter