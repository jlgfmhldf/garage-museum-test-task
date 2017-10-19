import React, { PureComponent } from 'react'
import {
	func,
} from 'prop-types'
import noop from 'noop3'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utlis/validateForm'

import Popup from '../../components/Popup'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Divider from '../../components/Divider'
import Button from '../../components/Button'

import s from './SubscriptionPopup.pcss'

const requiredValues = [
	'name',
]

@reduxForm({
	form: 'subscription',
	validate: validate(requiredValues),
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

	renderField = ({
		input,
		required,
		placeholder,
		meta: { touched, error, warning }
 }) => {
		return <div className={s.SubscriptionPopup__input}>
			<Input
				placeholder={placeholder}
				required={required}
				name={name}
				error={touched && !!error}
				errorText={error}
				onChange={input.onChange}
				onInput={input.onInput}
			/>
		</div>
	}

	renderCheckbox = ({ text, id, input }) => {
		return <div className={s.SubscriptionPopup__checkbox}>
			<Checkbox
				id={id}
				checked={input.checked}
				onChange={input.onChange}
			>
				{text}
			</Checkbox>
		</div>
	}

	render() {
		const {
			invalid,
			onClose,
			onSubmit,
			handleSubmit,
		} = this.props

		return (
			<div className={s.SubscriptionPopup}>
				<Popup
					onClose={onClose}
					title='подписка на рассылку музея «гараж»'
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={s.SubscriptionPopup__inputs}>
							<Field
								name='name'
								placeholder='Ваше имя'
								component={this.renderField}
								type='text'
								required
							/>
							<Field
								name='email'
								placeholder='Ваш e-mail'
								component={this.renderField}
								type='email'
							/>
						</div>
						<Field
							component={this.renderCheckbox}
							text='Еженедельная рассылка Музея «Гараж»'
							id={1}
							type='checkbox'
							name='checkbox1'
						/>
						<Field
							component={this.renderCheckbox}
							text='События для детей'
							id={2}
							type='checkbox'
							name='checkbox2'
						/>
						<Field
							component={this.renderCheckbox}
							text='Другие события'
							id={3}
							type='checkbox'
							name='checkbox3'
						/>
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
								disabled={invalid}
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
