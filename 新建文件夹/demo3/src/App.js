import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  constructor(props) {
      super(props)
  }
  render() {
      const themColor = this.props.themColor
      return (
          <div>
              <button style={{ color: themColor }} onClick={() => this.props.handleClick('red')}>红色</button>
              <button style={{ color: themColor }} onClick={() => this.props.handleClick('green')}>绿色</button>
          </div>
      )
  }
}

class Title extends Component {
  constructor(props) {
      super(props)
      this.state = {
          themColor: ''
      }
  }
  render() {
      const themColor = this.props.themColor
      return (
          <h3 style={{ color: themColor }}>标题</h3>
      )
  }
}

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          themColor: ''
      }
  }


  handleClick(color) {
      this.setState({
          themColor: color
      })
  }

  render() {
      return (
          <div>
              <h1>APP</h1>
              <Title themColor={this.state.themColor}></Title>
              <Button themColor={this.state.themColor} handleClick={(color) => this.handleClick(color)}></Button>
          </div>
      )
  }
}

export default App;
