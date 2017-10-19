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
			showSubscriptionPopupResult,
			showSurveyPopup,
			showSurveyPopupResult,
		} = this.props

		return (
			<div className={s.App}>
				{isShowSubscriptionPopup && <div className={s.App__bigPopup}>
					<SubscriptionPopup
						onSubmit={showSubscriptionPopupResult}
					/>
				</div>}
				{isShowSubscriptionResult && <div className={s.App__smallPopup}>
					<ResultPopup
						popupTitle='подписка на рассылку музея “гараж”'
						title='Подписка оформлена!'
						text={
							<p>Спасибо за то, что подписались на рассылку Музея «Гараж»!
								<b>Пройдите короткий опрос, чтобы получить скидку.</b>
							</p>
						}
						buttonText='Пройти опрос'
						onClick={showSurveyPopup}
					/>
				</div>}
				{isShowSurveyPopup && <div className={s.App__bigPopup}>
					<SurveyPopup
						onSubmit={showSurveyPopupResult}
					/>
				</div>}
				{isShowSurveyResult && <div className={s.App__smallPopup}>
					<ResultPopup
						popupTitle='подписка на рассылку музея “гараж”'
						title='Анкета отправлена!'
						text='Спасибо за участие, к вам на почту придет письмо с деталями вашей скидки'
						buttonText='Закрыть'
					/>
				</div>}
			</div>
		)
	}
}
