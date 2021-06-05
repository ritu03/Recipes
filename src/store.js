import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootSaga from './sagas/index'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(
  sagaMiddleware, logger
  // sagaMiddleware
))

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  // console.log('store', store.getState())
})

export default store
