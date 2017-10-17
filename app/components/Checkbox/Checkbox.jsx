import React, { PureComponent } from 'react'
import {
	string,
	number,
	bool,
	array,
	func,
	node,
	oneOfType
} from 'prop-types'
import noop from 'noop3'
import cn from 'classnames'

import s from './Checkbox.pcss'
import '../../icons/tick.svg'

export default class Checkbox extends PureComponent {
	static propTypes = {
		id: oneOfType([
			string,
			number,
		]),
		children: string,
		value: string,
		checked: bool,
		onChange: func,
	}

	static defaultProps = {
		checked: false,
		onChange: noop,
	}

	handleChange = event => {
		const { onChange, id, name } = this.props
		const { checked } = event.target

		onChange({ id, name, checked })
	}

	render() {
		const {
			id,
			children,
			checked,
			value,
			onInput,
		} = this.props

		return (
			<div className={s.Checkbox}>
				<input
					className={s.Checkbox__input}
					type='checkbox'
					id={id}
					name={id}
					value={value}
					checked={checked}
					onChange={this.handleChange}
				/>
				<label
					className={cn(s.Checkbox__label, {
						[`${s.Checkbox__label_checked}`]: checked,
					})}
					htmlFor={id}
				>
					<span className={s.Checkbox__tick}>
						<svg>
							<use xlinkHref='#tick' />
						</svg>
					</span>
					{children && <span
						className={s.Checkbox__content}
					>
						{children}
					</span>}
				</label>
			</div>
		)
	}
}
