import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const middlewares = [
		thunk,
	]

	if (__DEV__) {
		middlewares.push(
			require('redux-logger').createLogger()
		)
	}

	const reducer = combineReducers({
		root: rootReducer,
		form: formReducer,
	})

	const store = createStore(
		reducer,
		initialState,
		applyMiddleware(...middlewares),
	)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
