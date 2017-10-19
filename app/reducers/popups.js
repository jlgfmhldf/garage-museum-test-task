import {
	SHOW_SUBSCRIPTION_POPUP,
	SHOW_SUBSCRIPTION_POPUP_RESULT,
	SHOW_SURVEY_POPUP,
	SHOW_SURVEY_POPUP_RESULT,
} from '../constants/actions'

const defaultState = {
	isShowSubscriptionPopup: true,
	isShowSubscriptionResult: false,
	isShowSurveyPopup: false,
	isShowSurveyResult: false,
}

const hideAllPopups = () => ({
	isShowSubscriptionPopup: false,
	isShowSubscriptionResult: false,
	isShowSurveyPopup: false,
	isShowSurveyResult: false,
})

/* eslint-disable no-unused-vars */
export default function (state = defaultState, { type, payload }) {
	switch (type) {

	case SHOW_SUBSCRIPTION_POPUP_RESULT: {

		return {
			...state,
			...hideAllPopups(),
			isShowSubscriptionResult: true,
		}
	}

	case SHOW_SURVEY_POPUP: {
		return {
			...state,
			...hideAllPopups(),
			isShowSurveyPopup: true,
		}
	}

	case SHOW_SURVEY_POPUP_RESULT: {
		return {
			...state,
			...hideAllPopups(),
			isShowSurveyResult: true,
		}
	}

	default:
		return {
			...state
		}
	}
}
