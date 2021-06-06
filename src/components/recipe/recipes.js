import {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';

import { default as Actions } from '../../actions'
import RecipeItem from './recipeItem'
import {getResponseKey} from '../../util'

const Appheader = styled.header`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify:center;
`
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = (store) => {
  return {
    recipeData: store.recipeData
  }
}
const Recipes = (props) => {
  useEffect(() => {
    props.actions.getRecipe()
  }, [])
  
  const contents = getResponseKey(['recipeData','data','contents'],props)
  
  return (
    <MainContainer>
      <Appheader>
        <h1>Healthy Recipes by Ritu</h1>
      </Appheader>
      {/* <div>...loading</div> */}
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid container item xs={8}>
         {contents && contents.map((item, index)=> <RecipeItem key={index} values={item} />)}
        </Grid>
      </Grid>
    </MainContainer>
  )
} 

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)