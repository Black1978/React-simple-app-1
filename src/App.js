import React, { useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/Buttons/MyButton'
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
    const [postList, setPostlist] = useState([
        { id: 1, title: 'aaaaaaaaaaaaaaa', description: 'cccccccccccccccccccccc' },
        { id: 2, title: 'bbbbbbbbbbbbbbb', description: 'aaaaaaaaaaaaaaaaaaaaaa' },
        { id: 3, title: 'ccccccccccccccc', description: 'bbbbbbbbbbbbbbbbbbbbbb' },
    ])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState()
    const searchedAndSortedPosts = usePosts(postList, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
        setModal(false)
    }

    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }

    return (
        <div className='app'>
            <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
                Create a post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
        </div>
    )
}

export default App
