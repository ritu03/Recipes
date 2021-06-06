import axios from 'axios'



function mapCordinatesService (location) {
  return axios({
    method: 'GET',
    url: `https://www.metaweather.com/api/location/search/?query=${location}`,
    headers: {
      // 'x-api-key':'T9ckuV6YpMZsdNGRSg46a8yjtjyNxM32RF9GFOa0',
      Accept: '*/*'}
  })
  .then (response => {
    if (response.status >= 400) {
      throw new Error(response.error)
    }
    return response
  })  
  .catch(error => Promise.reject(error))
}

function weatherService (weatherId) {
  return axios({
    method: 'GET',
    url: `https://www.metaweather.com/api/location/${weatherId}/`,
    headers: {
      // 'x-api-key':'T9ckuV6YpMZsdNGRSg46a8yjtjyNxM32RF9GFOa0',
      Accept: '*/*'}
  })
  .then (response => {
    if (response.status >= 400) {
      throw new Error(response.error)
    }
    return response
  })  
  .catch(error => Promise.reject(error))
}

const WeatherService = {
  weatherService,
  mapCordinatesService
}

export default WeatherService
