import { all } from 'redux-saga/effects'

import recipesSaga from './recipe.saga'

export default function * rootSaga () {
  yield all([recipesSaga()])
}
