import React, { Component } from 'react'
import styles from './home.css'
var Imgs = require('./img.js').imgList
import { observer, inject } from 'mobx-react'
import Button from '../common/button/index'

@inject('UserStore')
@observer
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			testImg: Imgs.test,
			valumeImg: Imgs.test,
			btn1: {
				size: '.24rem',
				name: '这是主页'
			}
		}
	}
	chengeName() {
		this.props.UserStore.changeName('浮云先生')
	}

	toDevLinePage() {
		this.props.history.push('/devLine')
	}
	render() {
		console.log(this.props.UserStore.name)
		return (
			<div className={styles.root}>
				<p>
					{this.props.UserStore.name}
				</p>
				<div onClick={this.chengeName.bind(this)} className={styles.btn}>
					<Button obj={{ name: '修改名称', size: '.24rem' }} />
				</div>
				<div onClick={this.toDevLinePage.bind(this)} className={styles.btn}>
					<Button obj={this.state.btn1} />
				</div>
			</div>
		)
	}
}

export default Home

// 在渲染前调用
// componentWillMount() {
//     console.log("在渲染前调用")
// }
// // 在第一次渲染后调用
// componentDidMount() {
//     console.log('在第一次渲染后调用')
// }
// // 在组件接受到新的prop（更新后）调用
// componentWillReceiveProps(newProps) {
//     console.log("在组件接受到新的prop（更新后）调用")
// }
// // 返回一个布尔值，在组建接收到新的props或者state时调用
// shouldComponentUpdate(newProps, newState) {
//     console.log("返回一个布尔值，在组建接收到新的props或者state时调用")
// }
// // 在组件接收到新的props或者state但还没有render时被调用 在初始化时不会被调用。
// componentWillUpdate(nextProps, nextState) {
//     console.log('在组件接收到新的props或者state但还没有render时被调用')
// }
// // 在组件完成更新后立即调用。在初始化时不会被调用
// componentDidUpdate(prevProps, prevState){
//     console.log('在组件完成更新后立即调用。在初始化时不会被调用')
// }
// // 在组件从 DOM 中移除之前立刻被调用
// componentWillUnmount(){
//     console.log('在组件从 DOM 中移除之前立刻被调用')
// }
