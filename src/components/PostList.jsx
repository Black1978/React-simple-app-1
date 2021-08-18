import React from 'react'
import PostItem from './PostItem'

const PostList = ({ postList, deletePost }) => {
    return (
        <div>
            {postList.length ?
                postList.map(
                    item => <PostItem key={item.id} postId={item.id} title={item.title} description={item.description} deletePost={deletePost}></PostItem>
                ) : <h1 style={{ textAlign: 'center' }}>There is no posts!</h1>}
        </div>
    )
}

export default PostList