import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SubscriptionPopup from '../../components/SubscriptionPopup'
import ResultPopup from '../../components/ResultPopup'

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
		} = this.props

		return (
			<div className={s.App}>
				<div className={s.App__popup}>
					{isShowSubscriptionPopup && <SubscriptionPopup
						submitFunc={this.props.showSubscriptionPopupResult}
					/>}
				</div>
			</div>
		)
	}
}
