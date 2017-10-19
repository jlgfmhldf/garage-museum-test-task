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
		value: string,
		placeholder: string,
		name: string,
		type: string,
		errorText: string,
		error: bool,
		required: bool,
		onBlur: func,
		onChange: func,
	}

	static defaultProps = {
		onBlur: noop,
		onChange: noop,
		type: 'text'
	}

	render() {
		const {
			value,
			placeholder,
			name,
			type,
			required,
			error,
			errorText,
			onBlur,
			onChange
		} = this.props

		return (
			<div className={s.Input}>
				<input
					className={cn(s.Input__input, {
						[`${s.Input__input_error}`]: error,
					})}
					value={value}
					name={name}
					type={type}
					placeholder={required ? `${placeholder}*`: placeholder}
					onBlur={onBlur}
					onChange={onChange}
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
