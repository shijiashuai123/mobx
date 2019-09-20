import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
//  HashRouter 和 BrowserRouter 模式
import Home from '../view/home/home'
import DevList from '../view/devLine/devLine'
import MobxTest from '../view/MobxTest/index'

import { Provider } from 'mobx-react'
import stores from '../store'

// const stores = {
//   mainStore, userStore, commonStore
// };
console.log(stores)
class Side extends React.Component {
	constructor() {
		super()
		this.state = {
			routeList: [
				{ url: '/', component: MobxTest },
				{ url: '/devLine', component: DevList },
				{ url: '/home', component: Home }
			]
		}
	}
	render() {
		return (
			<Provider {...stores}>
				<Router>
					{this.state.routeList.map((item, index) => (
						<Route key={index} path={item.url} exact component={item.component} />
					))}
				</Router>
			</Provider>
		)
	}
}

export default Side
