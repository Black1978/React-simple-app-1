import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PostList = ({ postList, deletePost }) => {

    if (!postList.length) {
        return (<div>
            <h1 style={{ textAlign: 'center' }}>There is no posts!</h1>
        </div>)
    }
    return (
        <div>
            <TransitionGroup>
                {postList.map((item) => (
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post">
                        <PostItem postId={item.id} title={item.title} description={item.description} deletePost={deletePost}>
                        </PostItem>
                    </CSSTransition>))}
            </TransitionGroup>
        </div>
    )
}

export default PostList