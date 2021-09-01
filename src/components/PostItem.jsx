import React from 'react'
import { useHistory } from 'react-router-dom'
import MyButton from './UI/Buttons/MyButton'

const PostItem = ({title, postId, body, deletePost}) => {
    const router = useHistory()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{postId}. </strong>
                <strong>{title}</strong>
                <div>{body}</div>
            </div>
            <div className='post__btn'>
                <MyButton onClick={() => router.push(`/posts/${postId}`)} style={{marginRight: 5}}>Open</MyButton>
                <MyButton onClick={() => deletePost(postId)}>Delete</MyButton>
            </div>
        </div>
    )

}

export default PostItem