import About from './../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import Error from '../pages/Error'


export  const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/error', component: Error, exact: false},
]