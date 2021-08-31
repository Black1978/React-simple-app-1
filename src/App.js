import React, { useEffect, useState } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/Buttons/MyButton'
import Loader from './components/UI/Loader/Loader'
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts'
import { useFetching } from './hooks/useFetching'
import './styles/App.css'
import { getPagesCount } from './utils/pages'
import { usePagesNumbers } from './hooks/usePagesNumbers'

function App() {
    const [postList, setPostlist] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState()

    const [totalpages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const searchedAndSortedPosts = usePosts(postList, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const responce = await PostService.getAll(limit, page)
        setPostlist(responce.data)
        const totalCount = responce.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })
    const pagesNumbers = usePagesNumbers(totalpages)

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
        setModal(false)
    }
    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }
    const changePage = (page) => {
        setPage(page)
         fetchPosts(limit, page)
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
            {postsError && (
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>{postsError}</h1>
            )}
            {isPostsLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 50,
                        marginBottom: 50,
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
            )}
            <div className='page-wrapper'>
                {pagesNumbers.map((item) => (
                    <span
                        className={page !== item ? 'page-button' : 'page-button page-current'}
                        key={item}
                        onClick={() => changePage(item)}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default App
