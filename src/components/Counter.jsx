import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    function increament() {
        setCount(count + 1)
      }
      function decreament() {
        setCount(count - 1)
      }
  
      return (
          <div className='App'>
              <h1>{count}</h1>
              <button onClick={increament}>Add</button>
              <button onClick={decreament}>Minus</button>
          </div>
      )

}

export default Counter