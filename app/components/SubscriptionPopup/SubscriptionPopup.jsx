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
import { Field, reduxForm } from 'redux-form'

import Popup from '../../components/Popup'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Divider from '../../components/Divider'
import Button from '../../components/Button'

import s from './SubscriptionPopup.pcss'

@reduxForm({
	form: 'subscribtion',
})

export default class SubscriptionPopup extends PureComponent {
	static propTypes = {
		onClose: func,
		onSubmit: func,
	}

	static defaultProps = {
		onClose: noop,
		onSubmit: noop,
	}

	render() {
		const {
			onClose,
			onSubmit,
		} = this.props

		return (
			<div className={s.SubscriptionPopup}>
				<Popup
					onClose={onClose}
					title='подписка на рассылку музея «гараж»'
				>
					<form action="">
						<div className={s.SubscriptionPopup__inputs}>
							<div className={s.SubscriptionPopup__input}>
								<Input
									placeholder='Ваше имя'
									required
								/>
							</div>
							<div className={s.SubscriptionPopup__input}>
								<Input
									placeholder='Ваш e-mail'
								/>
							</div>
						</div>
						<div className={s.SubscriptionPopup__checkbox}>
							<Checkbox>Еженедельная рассылка Музея «Гараж»</Checkbox>
						</div>
						<div className={s.SubscriptionPopup__checkbox}>
							<Checkbox>События для детей</Checkbox>
						</div>
						<div className={s.SubscriptionPopup__checkbox}>
							<Checkbox>Другие события</Checkbox>
						</div>
						<div className={s.SubscriptionPopup__grayText}>
							* Поля со звездочкой обязательны для заполнения
						</div>
						<div className={s.SubscriptionPopup__divider}>
							<Divider />
						</div>
						<div className={s.SubscriptionPopup__button}>
							<Button
								type='submit'
								onClick={onSubmit}
							>
								Подписаться
							</Button>
						</div>
					</form>

				</Popup>
			</div>
		)
	}
}
