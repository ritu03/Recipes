import {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { default as Actions } from '../actions'
import RecipeItem from './recipeItem'
import recipes from '../data/recipes.json'

const Appheader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: red;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeContainer = styled.div`
/*Media queries */
display: flex;
flex-direction: column;
width: 100%;
margin-left: auto;
margin-right: auto;
@media (min-width: 769px) {
  flex-direction: row;
  width: 770px;
  margin: auto;
}
   
`
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = (store) => {
  return {
    recipes: store.recipeData
  }
}
const Recipes = (props) => {
  useEffect(() => {
    // console.log('props', props)
    // props.actions.recipeLoad()
  }, [])
  return (
    <MainContainer>
      <Appheader>
        <h1>Healthy Recipes by Ritu</h1>
      </Appheader>
      <div>...loading</div>
      <RecipeContainer>
        {recipes.contents.map((item, index)=> <RecipeItem key={index} values={item} />)}
      </RecipeContainer>
    </MainContainer>
  )
} 

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)