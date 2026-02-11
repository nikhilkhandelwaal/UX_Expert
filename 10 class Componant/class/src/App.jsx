import React, { Component } from 'react'
import Data from './Data'

export default class App extends Component {
  render() {
    const obj = { name: 'hello', age: 22 };
    return (
      <div>
        <Data obj={obj} />
      </div>
    )
  }
}
