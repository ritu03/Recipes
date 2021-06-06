import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import {getDayFromDate, convertToF} from '../../util'


const TileContainer = styled.div`
text-align: center;
`
const TextWrapper = styled.div`

`
const MaxTemp = styled.span`
text-align: left;
`
const MinTemp = styled.span`
text-align: right;
padding-left:30%;
`

const WeatherDayWidget = (props) => {
  console.log('val;ues', props.values)
  const metric = props.radioValue === 'Celcius' ? <span> &#8451; </span> : <span> &#8457; </span>
  return <Grid item xs ={12} sm={12} md={12} lg={2} >
    <TileContainer>
    <TextWrapper><p>{getDayFromDate(props.values.applicable_date)}</p></TextWrapper>
    <img width={100} height={75} src={`http://localhost:3000/weatherIcon_${props.index}.svg`}/>
    <p><MaxTemp>{props.radioValue === 'Celcius' ? Math.trunc(props.values.max_temp): convertToF(Math.trunc(props.values.max_temp))} {metric}</MaxTemp><MinTemp>{props.radioValue === 'Celcius' ? Math.trunc(props.values.min_temp): convertToF(Math.trunc(props.values.min_temp))} {metric}</MinTemp></p>
    <p>Wind Speed : {Math.trunc(props.values.wind_speed)}kph</p>
    </TileContainer>
    </Grid>
}

export default WeatherDayWidget