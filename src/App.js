
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store'
import Recipes from './components/recipes'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/recipes' component={Recipes} />
      </Router> 
    </Provider>
  )
}

export default App
