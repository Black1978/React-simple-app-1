import React, { useMemo, useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/Inputs/MyInput'
import MySelect from './components/UI/Select/MySelect'
import './styles/App.css'

function App() {
    const [postList, setPostlist] = useState([
        { id: 1, title: 'aaaaaaaaaaaaaaa', description: 'cccccccccccccccccccccc' },
        { id: 2, title: 'bbbbbbbbbbbbbbb', description: 'aaaaaaaaaaaaaaaaaaaaaa' },
        { id: 3, title: 'ccccccccccccccc', description: 'bbbbbbbbbbbbbbbbbbbbbb' },
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuary, setSearchQuary] = useState('')

    const createPost = (newPost) => {
        setPostlist([...postList, { ...newPost }])
    }

    const sortedPosts = useMemo(() => {
        console.log('Отработала функция ГутСортедПост')
        if (selectedSort) {
            return [...postList].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else {
            return postList
        }
    }, [selectedSort, postList])

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((item) => item.title.includes(searchQuary) )
    }, [sortedPosts, searchQuary ])

    const deletePost = (id) => {
        setPostlist(postList.filter((item) => item.id !== id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className='app'>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MyInput
                    placeholder='Search...'
                    value={searchQuary}
                    onChange={(e) => setSearchQuary(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Sort'
                    options={[
                        { value: 'title', name: 'Sort by title' },
                        { value: 'description', name: 'Sort by description' },
                    ]}
                />
            </div>

            {postList.length ? (
                <PostList postList={searchedAndSortedPosts} deletePost={deletePost} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>There is no posts!</h1>
            )}
        </div>
    )
}

export default App
