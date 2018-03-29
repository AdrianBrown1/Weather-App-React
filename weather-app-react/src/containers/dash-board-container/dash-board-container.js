import ItemList from '../../screens/dash-board/dash-board';
import { connect } from 'react-redux';
import { fetchWeather, resetWeatherState } from '../../actions/actions';
// import weather from '../../reducers/weather';


const mapStateToProps = (state) => {
  return {
   weather: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetWeatherState: () => {
    dispatch(resetWeatherState());
  },
  fetchWeather: (params) => {
    dispatch(fetchWeather(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(ItemList);