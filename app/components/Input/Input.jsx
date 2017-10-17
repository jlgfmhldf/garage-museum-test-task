import React, { PureComponent } from 'react'
import {
	bool,
	string,
	func,
} from 'prop-types'
import noop from 'noop3'

import cn from 'classnames'
import s from './Input.pcss'

export default class Input extends PureComponent {
	static propTypes = {
		onInput: func,
		value: string,
		placeholder: string,
		errorText: string,
		error: bool,
		required: bool,
	}

	static defaultProps = {
		onInput: noop,
	}

	render() {
		const {
			value, placeholder, required,
			error, errorText
		} = this.props

		return (
			<div className={s.Input}>
				<input
					className={cn(s.Input__input, {
						[`${s.Input__input_error}`]: error,
					})}
					value={value}
					placeholder={required ? `${placeholder}*`: placeholder}
					required={required}
				/>
				{error && errorText && <span
					className={s.Input__errorText}
				>
					{errorText}
				</span>}
			</div>
		)
	}
}
