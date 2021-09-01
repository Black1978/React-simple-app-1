import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Loader from './../components/UI/Loader/Loader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comm, setComm] = useState([])
    console.log(params.id);

    useEffect(() => {
        fetching(params.id)
        fetchingCom(params.id)
    }, [])


    const [fetching, isLoading, error] = useFetching(async (id) => {
        const responce = await PostService.getById(id)
        setPost(responce.data)
    })
    const [fetchingCom, isComLoading, errorCom] = useFetching(async (id) => {
        const responce = await PostService.getCommentsByPostId(id)
        setComm(responce.data)
    })

    console.log(comm);

    return (
        <div>
            <h1>You opened a post page with id = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id} . {post.title}</div>
            }
            <h2>These are comments to the post</h2>
            {isComLoading
                ? <Loader />
                : comm.map(item =>
                    <div key={item.id} style={{marginTop: '10px', border: '2px solid black', padding: 5}}>
                        <div>
                            {item.email}
                        </div>
                        <div>
                            {item.name}
                        </div>
                    </div>)

            }
        </div>
    )

}

export default PostIdPage