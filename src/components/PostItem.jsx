import React from 'react'
import MyButton from './UI/Buttons/MyButton'

const PostItem = ({title, postId, description, deletePost}) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{title}</strong>
                <div>{description}</div>
            </div>
            <div className='post__btn'>
                <MyButton onClick={() => deletePost(postId)}>Delete</MyButton>
            </div>
        </div>
    )

}

export default PostItem