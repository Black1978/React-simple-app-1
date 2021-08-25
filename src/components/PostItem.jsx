import React from 'react'
import MyButton from './UI/Buttons/MyButton'

const PostItem = ({title, postId, body, deletePost}) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{postId}. </strong>
                <strong>{title}</strong>
                <div>{body}</div>
            </div>
            <div className='post__btn'>
                <MyButton onClick={() => deletePost(postId)}>Delete</MyButton>
            </div>
        </div>
    )

}

export default PostItem