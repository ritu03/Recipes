import * as recipeReducer from './recipe.reducer'
import * as weatherReducer from './weather.reducer'

const AllReducers = Object.assign({},
  recipeReducer,
  weatherReducer
)

export default AllReducers
