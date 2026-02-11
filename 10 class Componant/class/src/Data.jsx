import React, { Component } from 'react'

export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.inc = () => {
            this.setState({ count: this.state.count + 1 })
        }
        this.decs = () => {
            this.setState({ count: this.state.count - 1 })
        }
    }
    render() {
        return (
            <div>
                <div> Name: {this.props.obj.name} </div>
                <div>Age : {this.props.obj.age}</div>
                <h2>{this.state.count}</h2>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.decs}>Decs</button>
            </div>
        )
    }
}


