import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './Test'
import Demo from './Demo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRenderTest: false
    }
  }
  render() {
    return (
      <div>
        {this.state.isRenderTest ? <Demo></Demo> : '不渲染Demo'}
        <h1>App</h1>
        <button type="button" onClick={() => this.setState({})}>APP setstate</button>
        <button type="button" onClick={() => this.setState({ isRenderTest: !this.state.isRenderTest })}>切换Demo渲染</button>
      </div>
    )
  }
}

export default App;
