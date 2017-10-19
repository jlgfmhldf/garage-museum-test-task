import React, { PureComponent } from 'react'
import {
	string,
	func,
	node,
	oneOfType,
} from 'prop-types'
import noop from 'noop3'
import cn from 'classnames'

import Popup from '../../components/Popup'
import Button from '../../components/Button'
import s from './ResultPopup.pcss'

import '../../icons/tick2.svg'

export default class ResultPopup extends PureComponent {
	static propTypes = {
		popupTitle: string,
		title: string,
		text: node,
		buttonText: string,
		icon: oneOfType([
			'success',
			'error',
		]),
		onClick: func,
		onClose: func,
	}

	static defaultProps = {
		onClick: noop,
		onClose: noop,
		icon: 'success',
	}

	render() {
		const {
			popupTitle,
			title,
			text,
			buttonText,
			icon,
			onClick,
			onClose,
		} = this.props

		return (
			<div className={s.ResultPopup}>
				<Popup
					title={popupTitle}
					onClose={onClose}
				>
					<div className={s.ResultPopup__content}>
						<div className={cn(s.ResultPopup__icon, {
							[`${s.ResultPopup__icon_success}`]: icon === 'success',
							[`${s.ResultPopup__icon_error}`]: icon === 'error',
						})}>
							<div className={s.ResultPopup__tick}>
								<svg>
									<use xlinkHref='#tick2' />
								</svg>
							</div>
						</div>

						<div className={s.ResultPopup__title}>
							{title}
						</div>

						<div className={s.ResultPopup__text}>
							{text}
						</div>

						<div className={s.ResultPopup__button}>
							<Button onClick={onClick}>{buttonText}</Button>
						</div>
					</div>
				</Popup>
			</div>
		)
	}
}
