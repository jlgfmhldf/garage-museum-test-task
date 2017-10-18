import React, { PureComponent } from 'react'
import {
	string,
	bool,
	func,
} from 'prop-types'
import noop from 'noop3'
import cn from 'classnames'

import s from './Button.pcss'

export default class Button extends PureComponent {
	static propTypes = {
		type: string,
		disabled: bool,
		children: string,
		onClick: func,
	}

	static defaultProps = {
		disabled: false,
		onClick: noop,
	}

	render() {
		const {
			children,
			disabled,
			onClick,
			type,
		} = this.props

		return (
			<button
				className={cn(s.Button, {
					[`${s.Button_disabled}`]: disabled,
				})}
				onClick={onClick}
				type={type}
				disabled={disabled}
			>
				{children}
			</button>
		)
	}
}
