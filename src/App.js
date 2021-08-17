import React, { useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MySelect from './components/UI/Select/MySelect'
import './styles/App.css'

function App() {
    const [postList, setPostlist] = useState([
        { id: 1, title: 'aaaaaaaaaaaaaaa', description: 'cccccccccccccccccccccc' },
        { id: 2, title: 'bbbbbbbbbbbbbbb', description: 'aaaaaaaaaaaaaaaaaaaaaa' },
        { id: 3, title: 'ccccccccccccccc', description: 'bbbbbbbbbbbbbbbbbbbbbb' },
    ])
    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
    }
    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }
    const [selectedSort, setSelectedSort] = useState()

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPostlist([...postList].sort((a, b) => a[sort].localeCompare(b[sort])))
    }


    return (
        <div className='app'>
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}}/>
            <MySelect  value={selectedSort} onChange={sortPosts} defaultValue='Sort' options={[
                {value: 'title', name: 'Sort by title'},
                {value: 'description', name: 'Sort by description'}
            ]}/>
            {postList.length ? (
                <PostList postList={postList} deletePost={deletePost} />
            ) : (
                <h1 style={{textAlign: 'center'}}>There is no posts!</h1>
            )}
        </div>
    )
}

export default App
