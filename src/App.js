import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
    const [postList, setPostlist] = useState([
        { id: 1, title: 'aaaaaaaaaaaaaaa', description: 'cccccccccccccccccccccc' },
        { id: 2, title: 'bbbbbbbbbbbbbbb', description: 'aaaaaaaaaaaaaaaaaaaaaa' },
        { id: 3, title: 'ccccccccccccccc', description: 'bbbbbbbbbbbbbbbbbbbbbb' },
    ])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    console.log(filter.query)
    console.log(filter.sort)

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
    }

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...postList].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return postList
        }
    }, [filter.sort, postList])

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((item) => item.title.toLowerCase().includes(filter.query))
    }, [sortedPosts, filter.query])

    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }

    return (
        <div className='app'>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
        </div>
    )
}

export default App
