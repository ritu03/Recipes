import {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { default as Actions } from '../../actions'
import WeatherDayWidget from './weatherDayWidget'
import {getResponseKey, getDateInMonthFormat, getDayFromDate, convertToF} from '../../util'
import {  Grid,
          FormControl,
          TextField,
          Button,
          FormLabel,
          RadioGroup,
          FormControlLabel,
          Radio
           } from '@material-ui/core';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify:center;
  padding:100px;
`
const CityTitle = styled.p`
font-size:24px;
`
const AdditionalInfo = styled.div`
width: max-content;
dl {
  display: flex;
  flex-wrap: wrap;
  }
  dt {
  width: 33%;
  }
  dd {
  margin-left: auto;
  width: 67%;
  word-wrap: break-word;
  }
`

const TempWrapper = styled.div`
display: flex;
`
const Temp = styled.div`
font-size:30px;
`

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = (store) => {
  return {
    weatherData: store.weatherData
  }
}
const WeatherWidget = (props) => {
  const currentTemp = getResponseKey(['weatherData','data','consolidated_weather','0','the_temp'],props)
  const [location, setLocation] = useState('Melbourne') 
  const [radioValue, setRadioValue] = useState('Celcius')
  const weatherId = getResponseKey(['weatherData','mapData','0','woeid'],props)
  const consolidatedWeather = getResponseKey(['weatherData','data','consolidated_weather'],props)
  const checkWeather =()=>{
    props.actions.getMapCordinates(location)
  }
  const handleChange = (e) =>{
    console.log('value is', e.target.value)
    setRadioValue(e.target.value)
  }
  useEffect(() => {
    props.actions.getMapCordinates('Melbourne')
  }, [])

  useEffect(() => {
    weatherId && props.actions.getWeather(weatherId)
  }, [weatherId])

  const metric = radioValue === 'Celcius' ? <span> &#8451; </span> : <span> &#8457; </span>
  
    
  return (
    <MainContainer>
     <Grid container xs={12} >
            <Grid container xs={12} item md={4}  justify='center' alignItems='center'>
              <TempWrapper>
              <TextField id="outlined-basic" label="Enter City" variant="outlined"  value={location} onChange={e => setLocation(e.target.value)}/>
                <Button variant="contained" color="primary" small onClick={checkWeather}>
                Check Weather
                </Button>
              </TempWrapper>
          </Grid>
          <Grid  container xs={12} item  md={6}  justify='center' alignItems='center'>
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">Change Unit</FormLabel> */}
                <RadioGroup row aria-label="Change Unit" name="Check unit" value={radioValue} onChange={handleChange}>
                  <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
                  <FormControlLabel value="Faranheit" control={<Radio />} label="Faranheit" />
                </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      <Grid container xs={12}>
        <Grid xs={12} item md={6}  justify='center' alignItems='center'>
        <CityTitle>{getResponseKey(['weatherData','data','title'],props)}</CityTitle>
        <p>{`${getDayFromDate(getResponseKey(['weatherData','data','time'],props))} ${getDateInMonthFormat(getResponseKey(['weatherData','data','time'],props))}`}</p>
        <TempWrapper><img width={100} height={75} src={`http://localhost:3000/weatherIcon_5.svg`}/><Temp>{radioValue === 'Celcius' ? currentTemp && currentTemp.toFixed(1) : convertToF(currentTemp).toFixed(1)}{metric}</Temp></TempWrapper>
    
        </Grid>
        <Grid xs={12} item md={6}  justify='center' alignItems='center'>
          <AdditionalInfo>
            <dl>
              <dt>Humidity</dt>
              <dd><b>{consolidatedWeather && consolidatedWeather[0].humidity}</b></dd>
              <br aria-hidden='true' />
              <dt>Visibility</dt>
              <dd><b>{consolidatedWeather && (consolidatedWeather[0].visibility).toFixed(2)}</b></dd>
              <br aria-hidden='true' />
              <dt>Air Pressure</dt>
              <dd><b>{consolidatedWeather && consolidatedWeather[0].air_pressure}PA</b></dd>
              <br aria-hidden='true' />
              <dt>Wind Speed</dt>
              <dd><b>{consolidatedWeather && (consolidatedWeather[0].wind_speed).toFixed(2)}kmp</b></dd>
            </dl>
          </AdditionalInfo>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid container item xs={12} md={12}>
         {consolidatedWeather && consolidatedWeather.map((item, index)=> <WeatherDayWidget key={index} radioValue={radioValue} index={index} values={item} />)}
        </Grid>
      </Grid>
    </MainContainer>
  )
} 

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget)