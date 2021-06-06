import * as actionTypes from '../actions/action_types'

const INITIAL_STATE = {
  data: null,
  error: '',
  status: '',
  mapData: null
}

export function WeatherReducer (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actionTypes.WEATHER_SUCCESS: {
      return Object.assign({}, state, {
        status: 'success',
        data: action.weatherSuccessData
      })
    }
    case actionTypes.WEATHER_FAILURE: {
      return Object.assign({}, state, {
        status: 'success',
        error: action.weatherFailureData
      })
    }
    case actionTypes.MAP_CORDINATES_SUCCESS: {
      return Object.assign({}, state, {
        status: 'success',
        mapData: action.mapCordinatesSuccessData
      })
    }
    case actionTypes.MAP_CORDINATES_FAILURE: {
      return Object.assign({}, state, {
        status: 'success',
        error: action.mapCordinatesFailureData
      })
    }
    default: {
      return state
    }
  }
}
