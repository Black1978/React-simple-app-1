import React, { useEffect, useState, useRef } from 'react'
import PostService from './../API/PostService'
import PostFilter from './../components/PostFilter'
import PostForm from './../components/PostForm'
import PostList from './../components/PostList'
import MyButton from './../components/UI/Buttons/MyButton'
import Loader from './../components/UI/Loader/Loader'
import MyModal from './../components/UI/MyModal/MyModal'
import { usePosts } from './../hooks/usePosts'
import { useFetching } from './../hooks/useFetching'

import { getPagesCount } from './../utils/pages'
import { usePagesNumbers } from './../hooks/usePagesNumbers'
import Pagination from './../components/UI/pagination/Pagination'

function Posts() {
    const [postList, setPostlist] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(null)

    const [totalpages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const searchedAndSortedPosts = usePosts(postList, filter.sort, filter.query)
    const lastElement = useRef()
    const observer = useRef()

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const responce = await PostService.getAll(limit, page)
        setPostlist([...postList, ...responce.data])
        const totalCount = responce.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })
    const pagesNumbers = usePagesNumbers(totalpages)

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])
    useEffect(() => {
        if(isPostsLoading) return
        if(observer.current) observer.current.disconnect()
        var callback = (arg) => {
            if(arg[0].isIntersecting && page < totalpages) {
                console.log(page);
                setPage(page + 1)
            }
           
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
    }, [isPostsLoading])

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
        setModal(false)
    }
    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }
    const changePage = (page) => {
        setPage(page)
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
            <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
            <div style={{height: 20, background: 'red'}} ref={lastElement}></div>
            {isPostsLoading && (
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
            )}
            <Pagination pagesNumbers={pagesNumbers} changePage={changePage} page={page} />
        </div>
    )
}

export default Posts
