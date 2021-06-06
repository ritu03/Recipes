import React from 'react'
import { render, cleanup } from '@testing-library/react'

import WeatherDayWidget from './weatherDayWidget'


const Values = {
  values: {air_pressure: 1017,
    applicable_date: "2021-06-11",
    created: "2021-06-06T03:58:10.877013Z",
    humidity: 66,
    id: 6753910346743808,
    max_temp: 22.875,
    min_temp: 16.345,
    predictability: 75,
    the_temp: 28.74,
    visibility: 9.999726596675416,
    weather_state_abbr: "lr",
    weather_state_name: "Light Rain",
    wind_direction: 149.5.toExponential,
    wind_direction_compass: "SSE",
    wind_speed: 4.778823272090989},
  radioValue: 'Celcius'
}

describe('WeatherDayWidget snapshot', () => {
  afterEach(cleanup)

  test('renders properly', () => {
    const { container } = render(<WeatherDayWidget values={Values} />)
    expect(container).toMatchSnapshot()
  })
})