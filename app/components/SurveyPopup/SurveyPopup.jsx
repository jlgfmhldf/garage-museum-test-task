import React, { PureComponent } from 'react'
import {
	func,
} from 'prop-types'
import noop from 'noop3'
import { Field, reduxForm } from 'redux-form'

import validate from '../../utlis/validateForm'

import Popup from '../../components/Popup'
import NumberText from '../../components/NumberText'
import Textarea from '../../components/Textarea'
import Divider from '../../components/Divider'
import Button from '../../components/Button'

import s from './SurveyPopup.pcss'

const requiredValues = [
	'question1',
	'question2',
]

@reduxForm({
	form: 'survey',
	validate: validate(requiredValues),
})

export default class SurveyPopup extends PureComponent {
	static propTypes = {
		onSubmit: func,
		handleSubmit: func,
	}

	static defaultProps = {
		onSubmit: noop,
	}

	renderField = ({
		input,
		placeholder,
		meta: { touched, error }
	}) => {
		return <div className={s.SurveyPopup__field}>
			<Textarea
				placeholder={placeholder}
				name={name}
				error={touched && !!error}
				errorText={error}
				onChange={input.onChange}
				onInput={input.onInput}
				onBlur={input.onBlur}
			/>
		</div>
	}

	render() {
		const {
			invalid,
			onSubmit,
			handleSubmit,
		} = this.props

		return (
			<div className={s.SurveyPopup}>
				<Popup
					title='подписка на рассылку музея «гараж»'
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={s.SurveyPopup__formItem}>
							<div className={s.SurveyPopup__question}>
								<NumberText number={1}>
									Why not try removing some filters or searching by a different keyword in the field above?
								</NumberText>
							</div>
							<Field
								placeholder='Ваш ответ'
								component={this.renderField}
								name='question1'
								type='textarea'
							/>
						</div>

						<div className={s.SurveyPopup__formItem}>
							<div className={s.SurveyPopup__question}>
								<NumberText number={2}>
									Why not try removing some filters?
								</NumberText>
							</div>
							<Field
								placeholder='Ваш ответ'
								component={this.renderField}
								name='question2'
								type='textarea'
							/>
						</div>

						<div className={s.SurveyPopup__divider}>
							<Divider />
						</div>

						<div className={s.SurveyPopup__button}>
							<Button
								type='submit'
								disabled={invalid}
								onClick={onSubmit}
							>
								Отправить
							</Button>
						</div>
					</form>

				</Popup>
			</div>
		)
	}
}
