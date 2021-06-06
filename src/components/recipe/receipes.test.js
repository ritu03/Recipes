import React from 'react'
import { render, cleanup  } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import Recipes from './recipes'

const mockStore = configureMockStore()
const storeValues = {
  recipeData: {
    data: null,
    status: ''
  }
}
const store = mockStore(storeValues)
describe('Recipes snapshot', () => {
  afterEach(cleanup)

  test('renders properly', () => {
    const { container } = render(<Recipes store={store} />)
    expect(container).toMatchSnapshot()
  })
  })