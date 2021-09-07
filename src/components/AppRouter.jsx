import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../context'
import { publicRoutes, privateRoutes } from '../router/index'

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)
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