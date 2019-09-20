import React from 'react'
import styles from './button.css'

// class Button extends Component {
// 	constructor(props) {
// 		super(props)
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<div className={styles.confirm}>
// 					我知道了
// 				</div>
// 			</div>
// 		)
// 	}
// }
// export default Button

export default function Button(props) {
	var props = props.obj
	return (
		<div className={styles.confirm} style={{ fontSize: props.size }}>
			{props.name || '确定'}
		</div>
	)
}
