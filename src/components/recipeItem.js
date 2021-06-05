import {useEffect} from 'react'
import styled from 'styled-components'

const RecipeTile = styled.div`
  margin: 16px 16px;
  border: 1px solid grey;
  width: 250px;
  height: 250px;
  display: inline-block;
`
const RecipeItem = (props) => {
  useEffect(() => {
   console.log('values')
  }, [])
  return <RecipeTile>
    <img  width={200} height={200} src={props.values.imageList.landscapewidedesktop1x.url} alt="recipe"></img>
    <p>{props.values.title}</p>
    </RecipeTile>
}

export default RecipeItem