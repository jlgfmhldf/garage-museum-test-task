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

import s from './Textarea.pcss'

export default class Textarea extends PureComponent {
	static propTypes = {
		value: string,
		placeholder: string,
		onInput: func,
	}

	static defaultProps = {
		onInput: noop,
	}

	render() {
		const {
			value,
			placeholder
		} = this.props

		return (
			<textarea
				className={s.Textarea}
				placeholder={placeholder}
			>
				{value}
			</textarea>
		)
	}
}
