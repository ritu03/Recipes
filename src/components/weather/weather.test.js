import React from 'react'
import { render, cleanup  } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import WeatherWidget from './weather'

const mockStore = configureMockStore()
const storeValues = {
  weatherData: {
    data: null,
    status: ''
  }
}
const store = mockStore(storeValues)
describe('WeatherWidget snapshot', () => {
  afterEach(cleanup)

  test('renders properly', () => {
    const { container } = render(<WeatherWidget store={store} />)
    expect(container).toMatchSnapshot()
  })
  })