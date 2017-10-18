import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SubscriptionPopup from '../../components/SubscriptionPopup'
import ResultPopup from '../../components/ResultPopup'

import s from './App.pcss'

import {
	testAction,
} from '../../actions/index'

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	testAction: () => dispatch(testAction()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
	componentWillMount() {
		this.props.testAction()
	}

	render() {
		return (
			<div className={s.App}>
				<div className={s.App__popup}>
					<SubscriptionPopup/>
				</div>
			</div>
		)
	}
}
