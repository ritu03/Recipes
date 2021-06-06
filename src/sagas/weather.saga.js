import { call, put, takeEvery } from 'redux-saga/effects'

import * as actionType from '../actions/action_types'
import WeatherService from '../services/weatherService'
import { default as actions } from '../actions/index'
import getResponseKey from '../util'



export function * handleMapCordinatesLoad (action) {
  try {
    const cordinatesResp = yield call(WeatherService.mapCordinatesService, action.location)
    yield put(actions.getMapCordinatesSuccess(cordinatesResp.data))
  } catch (error) {
    /** service call timeout - 50s **/
    if (error.code === 'ECONNABORTED' || !error.response) {
      yield put(actions.getMapCordinatesFailure('error'))
    } else {
      const resp = error.response
      yield handleMapCordinateErrors(resp)
    }
  }
}

export function * handleMapCordinateErrors (resp) {
  const failureData = getResponseKey(['data'], resp)
  // if (resp.status === 400) {
    yield put(actions.getMapCordinatesFailure(failureData))
  // }
}

export function * handleWeatherLoad (action) {

  try {
    const WeatherResp = yield call(WeatherService.weatherService, action.weatherId)
    yield put(actions.getWeatherSuccess(WeatherResp.data))
  } catch (error) {
    /** service call timeout - 50s **/
    if (error.code === 'ECONNABORTED' || !error.response) {
      yield put(actions.getWeatherFailure('error'))
    } else {
      const resp = error.response
      yield handleWeatherErrors(resp)
    }
  }
}

export function * handleWeatherErrors (resp) {
  const failureData = getResponseKey(['data'], resp)
  // if (resp.status === 400) {
    yield put(actions.getWeatherFailure(failureData))
  // }
}



export default function * watchWeather () {
  yield takeEvery(actionType.WEATHER_LOAD, handleWeatherLoad)
  yield takeEvery(actionType.LOAD_MAP_CORDINATES, handleMapCordinatesLoad)
}
