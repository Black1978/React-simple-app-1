import React from 'react'

const MySelect = ({ defaultValue, options, value, onChange }) => {

    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled>{defaultValue}</option>
            {options.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
        </select>
    )
}

export default MySelect