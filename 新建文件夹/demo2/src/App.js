import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends Component{
  constructor(props){
    super(props)
    
  }
  static defaultProps={
      title:'默认标题'
  }
  render(){
    return (
      <div>{this.props.title}</div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div>
          <Title></Title>  
      </div>
    );
  }
}

export default App;
