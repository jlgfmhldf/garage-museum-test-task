import {
	SHOW_SUBSCRIPTION_POPUP,
	SHOW_SUBSCRIPTION_POPUP_RESULT,
	SHOW_SURVEY_POPUP,
	SHOW_SURVEY_POPUP_RESULT,
} from '../constants/actions'

export const showSubscriptionPopup = () => ({
	type: SHOW_SUBSCRIPTION_POPUP,
})

export const showSubscriptionPopupResult = () => ({
	type: SHOW_SUBSCRIPTION_POPUP_RESULT,
})

export const showSurveyPopup = () => ({
	type: SHOW_SURVEY_POPUP,
})

export const showSurveyPopupResult = () => ({
	type: SHOW_SURVEY_POPUP_RESULT,
})
