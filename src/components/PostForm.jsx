import React, {useState} from 'react'
import MyInput from './UI/Inputs/MyInput'
import MyButton from './UI/Buttons/MyButton'

const PostForm = ({create}) => {
   
    const [post, setPost] = useState({ title: '', description: '' })

    const addPost = (e) => {
        e.preventDefault()
       create({ ...post, id: Date.now() })
        setPost({ title: '', description: '' })
    }
    return (
        <form>
            <MyInput type='text' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} placeholder='A title of a post' />
            <MyInput type='text' value={post.description} onChange={e => setPost({ ...post, description: e.target.value })} placeholder='A description of a post' />
            <MyButton onClick={addPost}>Add the post</MyButton>
        </form>
    )
}

export default PostForm