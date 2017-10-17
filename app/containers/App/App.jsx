import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'

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
				<Input />
				<Button>Оплатить</Button>
				<Checkbox>Да / нет </Checkbox>
			</div>
		)
	}
}
