import { all } from 'redux-saga/effects'

import recipesSaga from './recipe.saga'
import weatherSaga from './weather.saga'

export default function * rootSaga () {
  yield all([recipesSaga(),weatherSaga()])
}
