import React, { PureComponent } from 'react'
import {
	string,
	number,
	bool,
	array,
	func,
	node,
} from 'prop-types'
import noop from 'noop3'

import s from './Divider.pcss'

export default class Divider extends PureComponent {
	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		// const {  } = this.props

		return (
			<div className={s.Divider} />
		)
	}
}
