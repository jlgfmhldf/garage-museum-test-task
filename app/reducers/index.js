import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import popups from './popups'

export default combineReducers({
	popups,
	form: formReducer,
})
