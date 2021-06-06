import * as actionType from './action_types'

import {default as action} from './index'

describe('Recipe Actions', () => {
  it('should getRecipe ', () => {
    expect(action.getRecipe(actionType.RECIPE_LOAD).type).toEqual('RECIPE_LOAD')
  })
  it('should getRecipeSuccess ', () => {
    expect(action.getRecipeSuccess(actionType.RECIPE_SUCCESS).type).toEqual('RECIPE_SUCCESS')
  })
  it('should getRecipeFailure ', () => {
    expect(action.getRecipeFailure(actionType.RECIPE_FAILURE).type).toEqual('RECIPE_FAILURE')
  })
})
