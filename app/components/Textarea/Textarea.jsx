import React, { PureComponent } from 'react'
import {
	string,
	bool,
	func,
} from 'prop-types'
import noop from 'noop3'

import s from './Textarea.pcss'

export default class Textarea extends PureComponent {
	static propTypes = {
		value: string,
		placeholder: string,
		name: string,
		errorText: string,
		error: bool,
		onChange: func,
		onBlur: func,
	}

	static defaultProps = {
		onChange: noop,
		onBlur: noop,
	}

	render() {
		const {
			value,
			name,
			placeholder,
			error,
			errorText,
			onChange,
			onBlur,
		} = this.props

		return (
			<div className={s.Textarea}>
				<textarea
					className={s.Textarea__textarea}
					placeholder={placeholder}
					name={name}
					onBlur={onBlur}
					onChange={onChange}
				>
					{value}
				</textarea>
				{error && errorText && <span
					className={s.Textarea__errorText}
				>
					{errorText}
				</span>}
			</div>
		)
	}
}
