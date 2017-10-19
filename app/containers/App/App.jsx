import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SubscriptionPopup from '../../components/SubscriptionPopup'
import ResultPopup from '../../components/ResultPopup'
import SurveyPopup from '../../components/SurveyPopup'

import s from './App.pcss'

import {
	showSubscriptionPopup,
	showSubscriptionPopupResult,
	showSurveyPopup,
	showSurveyPopupResult,
} from '../../actions/index'

/* eslint-disable no-unused-vars */
const mapStateToProps = ({ popups }) => ({
	isShowSubscriptionPopup: popups.isShowSubscriptionPopup,
	isShowSubscriptionResult: popups.isShowSubscriptionResult,
	isShowSurveyPopup: popups.isShowSurveyPopup,
	isShowSurveyResult: popups.isShowSurveyResult,
})

const mapDispatchToProps = dispatch => ({
	showSubscriptionPopup: () => dispatch(showSubscriptionPopup()),
	showSubscriptionPopupResult: () => dispatch(showSubscriptionPopupResult()),
	showSurveyPopup: () => dispatch(showSurveyPopup()),
	showSurveyPopupResult: () => dispatch(showSurveyPopupResult()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {

	render() {
		const {
			isShowSubscriptionPopup,
			isShowSubscriptionResult,
			isShowSurveyPopup,
			isShowSurveyResult,
			showSubscriptionPopup,
			showSubscriptionPopupResult,
			showSurveyPopup,
			showSurveyPopupResult,
		} = this.props

		return (
			<div className={s.App}>
				<div className={s.App__popup}>
					{isShowSubscriptionPopup && <SubscriptionPopup
						submitFunc={this.props.showSubscriptionPopupResult}
					/>}
					{isShowSubscriptionResult && <ResultPopup
						popupTitle='подписка на рассылку музея “гараж”'
						title='Подписка оформлена!'
						text={
							<p>Спасибо за то, что подписались на рассылку Музея «Гараж»!
								<b>Пройдите короткий опрос, чтобы получить скидку.</b>
							</p>
						}
						buttonText='Пройти опрос'
						onClick={showSurveyPopup}
					/>}
					{isShowSurveyPopup && <SurveyPopup />}
					{isShowSurveyResult && <ResultPopup
						popupTitle='подписка на рассылку музея “гараж”'
						title='Анкета отправлена!'
						text='Спасибо за участие, к вам на почту придет письмо с деталями вашей скидки'
						buttonText='Закрыть'
						// onClick={showSurveyPopup}
					/>}
				</div>
			</div>
		)
	}
}
