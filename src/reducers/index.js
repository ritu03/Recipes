import { combineReducers } from 'redux'
import { default as AppReducers } from './reducer_app'
// import { RecipeReducer } from './recipe.reducer'
import { CLEAR_STORE } from '../actions/action_types'

const appReducer = combineReducers({
  recipeData: AppReducers.RecipeReducer
})

const rootReducer = (state, action) => {
  /* -- if action type is CLEAR_STORE set state as undefined, to restore store to initial value -- */
  if (action.type === CLEAR_STORE) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
