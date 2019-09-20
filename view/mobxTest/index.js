import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Button from '../common/button/index'
import styles from './mobx.css'

// 观察者
@inject('UserStore')
@inject('OrderLine')
@observer
class MobxTest extends Component {
	constructor(props) {
		super(props)
	}

	chengeName() {
		this.props.UserStore.changeName('傻逼先生')
	}
	goSecPage() {
		this.props.history.push('/home')
	}
	render() {
		const UserStore = this.props.UserStore
		return (
			<div>
				<p>
					{UserStore.name}
				</p>
				<div className={styles.box}>
					<div onClick={this.chengeName.bind(this)} className={styles.btn1}>
						<Button obj={{ name: '点击修改名称', size: '.24rem' }} />
					</div>
					<div onClick={this.goSecPage.bind(this)} className={styles.btn1}>
						<Button obj={{ name: '去第二个页面', size: '.24rem' }} />
					</div>
				</div>
			</div>
		)
	}
}

export default MobxTest
