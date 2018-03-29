import React, { Component } from 'react';
import { getHighTempQuote, getLowTempQuote } from '../../helpers';

export default class Weather extends Component {

  calculateTemp(currentTemp) {
    return ((currentTemp - 273.15) * 1.8) + 32;
  }

  _getWeatherInfo = () => {
    const { weather } = this.props;

    if(!weather) return null; 

    if(weather.err) {
      return (
        <div className='weather'>
          <p className='weather-error'> f*cking error: invalid city</p>
        </div>
      )
    }

    if(weather.todaysWeather) {
      const todaysWeather = weather.todaysWeather;
      const currently = todaysWeather.description;
      const currentTempCel = this.calculateTemp(todaysWeather.currentTemp);
      const highTempCel = this.calculateTemp(todaysWeather.maxTemp);
      const lowTempCel = this.calculateTemp(todaysWeather.minTemp);
      const currentTemp = Math.round(currentTempCel);
      const hightTemp = Math.round(highTempCel);
      const lowTemp = Math.round(lowTempCel);       
  
      return (
        <div className='weather'>
          <div className='weather-col'>
            <p className='weather-description'>Today<span className='weather-text'>{currently}</span>
            </p>
            <p className='weather-description'>Current Temp
              <span className='weather-text'>{currentTemp}°</span>
            </p>
          </div>
          <div className='weather-col'>
            <p className='weather-description'>Humidity
              <span className='weather-text'>{todaysWeather.humidity}%</span>
            </p>
            <p className='weather-description'>High
              <span className='weather-text'>{getHighTempQuote(hightTemp)}</span>
            </p>
            <p className='weather-description'>Today's low
              <span className='weather-text'>{getLowTempQuote(lowTemp)}</span>
            </p>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="weather-container">
        {this._getWeatherInfo()}
      </div>  
    )
  }
}
