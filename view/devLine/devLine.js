import React, { Component } from 'react'
import styles from './devLine.css'

class DevLine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			descList: [ '测试功能', '测试功能', '测试功能', '测试功能', '测试功能' ]
		}
	}

	backHome() {
		window.location.href = '#/'
	}
	render() {
		return (
			<div className={styles.box}>
				<div className={styles.step}>
					{this.state.descList.map((item, index) => (
						<p key={index} className={styles.stepDesc}>
							{item}
						</p>
					))}
				</div>
				<div className={styles.confirm} onClick={this.backHome.bind(this)}>
					我知道了
				</div>
			</div>
		)
	}
}

export default DevLine
