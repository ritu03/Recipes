import React from 'react'
import { render, cleanup } from '@testing-library/react'

import RecipeItem from './recipeItem'


const Values = {
  imageList: {landscapewidedesktop1x: {url: 'abc.com'}},
  title: 'title123'
}

describe('RecipesItem snapshot', () => {
  afterEach(cleanup)

  test('renders properly', () => {
    const { container } = render(<RecipeItem values={Values} />)
    expect(container).toMatchSnapshot()
  })
})