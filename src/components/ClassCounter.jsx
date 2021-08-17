import React from 'react'

class ClassCounter extends React.Component {
    constructor() {
        super()
        this.state = {count: 0}
        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
    }
    increament() {
        this.setState({count: this.state.count + 1})
    }
    decreament() {
        this.setState({count: this.state.count - 1})
    }


    render() {
        return (
            <div className='App' >
                <h1>{this.state.count}</h1>
                <button onClick={this.increament}>Add</button>
                <button onClick={this.decreament}>Minus</button>
            </div>
        )
    }


}
export default ClassCounter