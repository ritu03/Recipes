import { polyfill } from 'es6-promise'

import * as recipeActions from './recipe.action'


/* Initiate polyfill for IE support of Promise */
polyfill()

const ActionCreators = Object.assign({}, recipeActions)

export default ActionCreators
