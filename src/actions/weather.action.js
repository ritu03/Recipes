import * as actionType from './action_types'

export function getWeather (weatherId) {
  return {
    type: actionType.WEATHER_LOAD,
    weatherId
  }
}

export function getWeatherSuccess (weather) {
  return {
    type: actionType.WEATHER_SUCCESS,
    status: 'success',
    weatherSuccessData: weather
  }
}

export function getWeatherFailure (weatherFailureData) {
  return {
    type: actionType.WEATHER_FAILURE,
    status: 'error',
    weatherFailureData
  }
}

export function getMapCordinates (location) {
  return {
    type: actionType.LOAD_MAP_CORDINATES,
    location
  }
}

export function getMapCordinatesSuccess (mapCordinates) {
  return {
    type: actionType.MAP_CORDINATES_SUCCESS,
    status: 'success',
    mapCordinatesSuccessData: mapCordinates
  }
}

export function getMapCordinatesFailure (mapCordinatesFailureData) {
  return {
    type: actionType.MAP_CORDINATES_FAILURE,
    status: 'error',
    mapCordinatesFailureData
  }
}
