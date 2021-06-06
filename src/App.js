
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'
import Recipes from './components/recipe/recipes'
import WeatherWidget from './components/weather/weather'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/recipes' component={Recipes} />
        <Route path='/weather' component={WeatherWidget} />
      </Router> 
    </Provider>
  )
}

export default App
