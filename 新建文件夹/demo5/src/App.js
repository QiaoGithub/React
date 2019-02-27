import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import propTypes from 'prop-types'

class Demo extends Component {
  constructor(props) {
    super()
  }
  static contextTypes = {
    title: propTypes.string,
    color: propTypes.string,
    handleTick:propTypes.func
  }
  render() {
    const themColor=this.context.color
    return(
        <h1 style={{color:themColor}}>{this.context.title}</h1>
    )
  }
}

class Button extends Component {
  static contextTypes = {
    title: propTypes.string,
    color: propTypes.string,
    handleTick:propTypes.func
  }
  constructor(props) {
    super()
  }
  render() {
    const themColor=this.context.color
    const handleTick=this.context.handleTick
    return (
      <div>
        <button type="button" style={{color:themColor}}
          onClick={()=>handleTick('red')}
        >Red</button>
        <button type="button" style={{color:themColor}}
          onClick={()=>handleTick('green')}
        >Green</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      color:''
    }
  }
  static childContextTypes = {
    title: propTypes.string,
    color:propTypes.string,
    handleTick:propTypes.func
  }
  getChildContext() {
    return{
      title: '大标题',
      color:this.state.color,
      handleTick:(color)=>this.handleTick(color)
    }
  }

  handleTick(changeColor){
    this.setState({
      color:changeColor
    })
  }


  render() {
    return (
      <div>
        <Demo></Demo>
        <Button></Button>
      </div>
    );
  }
}

export default App;
