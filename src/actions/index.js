import { polyfill } from 'es6-promise'

import * as recipeActions from './recipe.action'
import * as weatherActions from './weather.action'


/* Initiate polyfill for IE support of Promise */
polyfill()

const ActionCreators = Object.assign({}, 
  recipeActions,
  weatherActions)

export default ActionCreators
