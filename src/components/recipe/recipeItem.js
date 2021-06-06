import {useEffect} from 'react'
import styled from 'styled-components'

const RecipeTile = styled.div`
  margin: 16px 16px;
  border: 1px solid grey;
  width: 250px;
  height: 250px;
  display: inline-block;
`
const TextWrapper = styled.div`
text-align: center;
`

const RecipeItem = (props) => {
  useEffect(() => {
   console.log('values')
  }, [])
  return <RecipeTile>
    <img  width={250} height={200} src={props.values.imageList.landscapewidedesktop1x.url}></img>
    <TextWrapper><p>{props.values.title}</p></TextWrapper>
    </RecipeTile>
}

export default RecipeItem