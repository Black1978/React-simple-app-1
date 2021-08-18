import React from 'react'
import MyInput from './UI/Inputs/MyInput'
import MySelect from './UI/Select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder='Search...'
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={valuesort => setFilter({ ...filter, sort: valuesort})}
                defaultValue='Sort'
                options={[
                    { value: 'title', name: 'Sort by title' },
                    { value: 'description', name: 'Sort by description' },
                ]}
            />
        </div>
    )

}

export default PostFilter