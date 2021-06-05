import * as actionTypes from '../actions/action_types'

const INITIAL_STATE = {
  data: null,
  error: '',
  status: ''
}

export function RecipeReducer (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actionTypes.RECIPE_SUCCESS: {
      return Object.assign({}, state, {
        status: 'success',
        data: action.recipeSuccessData
      })
    }
    case actionTypes.RECIPE_FAILURE: {
      return Object.assign({}, state, {
        status: 'success',
        error: action.recipeFailureData
      })
    }
    default: {
      return state
    }
  }
}
