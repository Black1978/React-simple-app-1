import React from 'react'
import PostItem from './PostItem'

const PostList = ({postList, deletePost}) => {
    return (
        <div>
            {postList.map(
                item => <PostItem key={item.id} postId={item.id} title={item.title} description={item.description} deletePost={deletePost}></PostItem>
            )}
        </div>
    )
}

export default PostList