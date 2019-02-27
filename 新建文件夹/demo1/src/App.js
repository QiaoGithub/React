import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './Button'
import Input from './input'

//类方式的组件
// class Button extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <button type="button">来自Button的组件</button>
//     )
//   }
// }

//函数方式组件
// const Nav=()=>{
//   return (
//     <div style={{color:'white',backgroundColor:'black'}}>qiao</div>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      like: false
    }
  }

  // handelClick() {
  //   this.setState({
  //     like: !this.state.like
  //   })
  // }


  render() {
    return (<div>
      {/* <Nav></Nav>
      <Button></Button>
      <Button></Button>
      <button type="button" style={this.state.like ? { color: 'red' } : { color: 'black' }} onClick={() => { this.handelClick() }}>
        {
          this.state.like ? '已赞' : '喜欢'
        }
      </button> */}

      <Input></Input>
    </div>)

  }
}

export default App;