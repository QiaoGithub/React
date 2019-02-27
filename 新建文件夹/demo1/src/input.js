import React , {Component} from 'react'


//受控组件
export default class input extends Component{
    constructor(){
        super()
        this.state={
            value:''
        }
    }

    handleInput(e){
        if(this.state.value.length > 10){
            return
        }
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return(
            <input type="text" onInput={(e)=>this.handleInput(e)} value={this.state.value}></input>
        )
    }
}