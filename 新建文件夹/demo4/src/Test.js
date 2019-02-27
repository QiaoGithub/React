import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super()
        console.log('constructor')
        this.state={
            time:new Date()
        }
    }

    Tick(){
        this.setState({
            time:new Date()
        })
    }

    //加载
    componentWillMount() {
        console.log('组件将要加载 componentWillMount')
        this.timeId=setInterval(()=>this.Tick(),1000)
    }
    componentDidMount() {
        console.log('组件已经加载 componentDidMount')
    }

    //更新生命周期
    componentWillReceiveProps() {
        console.log('组件将要接收参数 componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('组件是否更新 shouldComponentUpdate')
        if(nextState.time.getSeconds() %2 ===0){
            return true
        }
        return false
    }
    componentWillUpdate() {
        console.log('组件将要更新 componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('组件已经更新 componentDidUpdate')
    }

    //卸载
    componentWillUnmount(){
        console.log('组件将要卸载 componentWillUnmount')
        clearInterval(this.timeId)
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Test</h1>
                <p>{this.state.time.getSeconds()}</p>
                <button type="button" onClick={()=>{this.setState({})}}>setState</button>
                <button type="button" onClick={()=>{this.forceUpdate()}}>forceUpdate</button>
            </div>
        )
    }
}

export default Test