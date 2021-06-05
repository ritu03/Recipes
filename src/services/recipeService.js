import axios from 'axios'

function recipeService () {
  return axios({
    method: 'GET',
    url: 'localhost:3000/getrecipes',
    headers: {Accept: '*/*'}
  })
  .then (response => {
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
