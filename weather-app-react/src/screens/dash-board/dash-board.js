import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/form/form';
import Weather from '../../components/weather/weather';

export default class Dashboard extends Component {

  static propTypes = {
    fetchWeather: PropTypes.func,
    resetWeatherState: PropTypes.func,
    weather: PropTypes.object,
  }

  render() {
    const { fetchWeather, weather, resetWeatherState } = this.props;

    return (
      <div className="dash-board__container">
        <Form fetchWeather={fetchWeather} weather={weather} resetWeatherState={resetWeatherState}/>
        <Weather weather={weather}/>
      </div>
    );
  }
}
