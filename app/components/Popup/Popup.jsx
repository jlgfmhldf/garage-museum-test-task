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

import s from './Popup.pcss'

export default class Popup extends PureComponent {
	static propTypes = {
		title: string,
		children: node,
		onClose: func,
	}

	static defaultProps = {
		onClose: noop,
	}

	render() {
		const {
			title,
			children,
			onClose,
		} = this.props

		return (
			<div className={s.Popup}>
				<div className={s.Popup__title}>
					{title}
					<div
						className={s.Popup__close}
						onClick={onClose}
					/>
				</div>
				<div className={s.Popup__content}>
					{children}
				</div>
			</div>
		)
	}
}
