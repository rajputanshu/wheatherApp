import {
  GET_CITIES,
  GET_FULL_INFO,
  SET_ERROR,
  } from '../types';
 export const wheather = (state = {}, action) => {
    switch (action.type) {
      case GET_CITIES:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case GET_FULL_INFO:
        return {
          ...state,
          data: action.payload,
        };
      case SET_ERROR: 
      return {
        ...state,
          error: action.payload,
      }
      default:
        return state;
    }
  };