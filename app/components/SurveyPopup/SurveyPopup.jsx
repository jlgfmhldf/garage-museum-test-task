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

import Popup from '../../components/Popup'
import NumberText from '../../components/NumberText'
import Textarea from '../../components/Textarea'
import Divider from '../../components/Divider'
import Button from '../../components/Button'

import s from './SurveyPopup.pcss'

export default class SurveyPopup extends PureComponent {
	static propTypes = {
		onSubmit: func,
	}

	static defaultProps = {
		onSubmit: noop,
	}

	render() {
		const {
			onSubmit,
		} = this.props

		return (
			<div className={ s.SurveyPopup }>
				<Popup
					title='подписка на рассылку музея «гараж»'
				>
					<form action="">
						<div className={s.SurveyPopup__formItem}>
							<div className={s.SurveyPopup__question}>
								<NumberText number={1}>
									Why not try removing some filters or searching by a different keyword in the field above?
								</NumberText>
							</div>
							<div className={s.SurveyPopup__field}>
								<Textarea placeholder='Ваш ответ'/>
							</div>
						</div>

						<div className={s.SurveyPopup__formItem}>
							<div className={s.SurveyPopup__question}>
								<NumberText number={1}>
									Why not try removing some filters?
								</NumberText>
							</div>
							<div className={s.SurveyPopup__field}>
								<Textarea placeholder='Ваш ответ'/>
							</div>
						</div>

						<div className={s.SurveyPopup__divider}>
							<Divider />
						</div>

						<div className={s.SurveyPopup__button}>
							<Button
								type='submit'
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
