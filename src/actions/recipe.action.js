import * as actionType from './action_types'

export function getRecipe () {
  return {
    type: actionType.RECIPE_LOAD
  }
}

export function getRecipeSuccess (recipe) {
  return {
    type: actionType.RECIPE_SUCCESS,
    status: 'success',
    recipeSuccessData: recipe
  }
}

export function getRecipeFailure (recipeFailureData) {
  return {
    type: actionType.RECIPE_FAILURE,
    status: 'error',
    recipeFailureData
  }
}
