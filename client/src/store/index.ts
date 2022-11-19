import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// ==== Redux Saga ====
import createSagaMiddleware from 'redux-saga'
// ==== Root saga ====
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)