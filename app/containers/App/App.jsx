import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Test from '../../components/Test'

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
			<div>
				<Test>
					Hello!!!
				</Test>
			</div>
		)
	}
}
