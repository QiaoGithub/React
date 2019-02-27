import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time:new Date()
        }
        this.timeId = setInterval(()=>{this.Tick()},1000)
    }

    Tick(){
        this.setState({
            time:new Date()
        })
    }

    static getDerivedStateFromProps(nextProps,prevState) {
        //函数返回结果将会被添加到state里面/更新
        console.log('静态生命周期函数')
        return ({
            like:true
        })
    }
    render() {
        console.log('render',this.state)
        return (<div><p>Demo </p>
            {this.state.time.getSeconds()}
            <button type="button" onClick={()=>{this.setState({})}}>setState</button>
        </div>)
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    componentDidUpdate(prevProps,prevState,info){
        console.log('componentDidUpdate')
        console.log(info)
    }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
    getSnapshotBeforeUpdate(){
        console.log('更新前获得快照')
        return 'from getSnapshotBeforeUpdate'
    }

    //卸载
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timeId)
    }
}

export default Demo