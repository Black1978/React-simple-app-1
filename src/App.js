import React, { useEffect, useState } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/Buttons/MyButton'
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
    const [postList, setPostlist] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState()
    const [isPostLoading, setIsPostLoading] = useState(true)
    const searchedAndSortedPosts = usePosts(postList, filter.sort, filter.query)
    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
        setModal(false)
    }

    async function fetchPosts() {
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPostlist(posts)
            setIsPostLoading(false)
        }, 1000)
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
            {isPostLoading ? (
                <h1>The page is loading ........</h1>
            ) : (
                <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
            )}
        </div>
    )
}

export default App
