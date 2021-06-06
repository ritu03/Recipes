import axios from 'axios'

function recipeService () {
  return axios({
    method: 'GET',
    url: `http://localhost:3000/recipes.json`,
    headers: {Accept: '*/*'}
  })
  .then (response => {
    console.log('response in service ', response)
    if (response.status >= 400) {
      throw new Error(response.error)
    }
    return response
  })  
  .catch(error => Promise.reject(error))
}

const Recipe = {
  recipeService
}

export default Recipe
