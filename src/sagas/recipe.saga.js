import { call, put, takeEvery } from 'redux-saga/effects'

import * as actionType from '../actions/action_types'
import RecipeService from '../services/recipeService'
import { default as actions } from '../actions/index'
import getResponseKey from '../util'


export function * handleRecipeLoad () {

  try {
    const RecipeResp = yield call(RecipeService.recipeService)
    yield put(actions.getRecipeSuccess(RecipeResp.data))
  } catch (error) {
    /** service call timeout - 50s **/
    if (error.code === 'ECONNABORTED' || !error.response) {
      yield put(actions.getRecipeFailure('error'))
    } else {
      const resp = error.response
      yield handleRecipeErrors(resp)
    }
  }
}

export function * handleRecipeErrors (resp) {
  const failureData = getResponseKey(['data'], resp)
  // if (resp.status === 400) {
    yield put(actions.getRecipeFailure(failureData))
  // }
}

export default function * watchRecipe () {
  yield takeEvery(actionType.RECIPE_LOAD, handleRecipeLoad)
}
