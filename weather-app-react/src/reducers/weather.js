import { FETCH_WEATHER_REQUESTS, FETCH_WEATHER_ERR, FETCH_WEATHER_SUCCESS } from '../constants/action-types';

// The Store listens for action cases
// This is where all state changing must be done.
const initialState = null;
export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER_REQUESTS: {
        return {
          ...state,
          ...action.payload,
        };
      }
      case FETCH_WEATHER_ERR: {
        return {
          ...state,
          ...action.payload,
        };
      }
      case FETCH_WEATHER_SUCCESS: {
          return {
            ...state,
            ...action.payload,
          };
      }
      default: {
        return state;
      }
    }
  }