import {
  GET_CITIES,
  GET_FULL_INFO,
  SET_ERROR
  } from '../types';
  import axios from 'axios';
  import { openWheatherMap_api_key } from '../../../config.json';
//   // Login User
export const getAllCities = () => async dispatch => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=51.5&lon=-0.118&cnt=40&units=metric&appid=${openWheatherMap_api_key}`);
     
        dispatch({
          type: GET_CITIES,
          payload: res.data
        });
     
      return res.data;
  } catch (err) {
    dispatch({
      type: SET_ERROR
    });
  
      return err.message;
  }
};

export const getfullinfo = (city) => async dispatch => {
  try {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWheatherMap_api_key}`);
     
        dispatch({
          type: GET_FULL_INFO,
          payload: res.data
        });
     
     
      return res.data;
  } catch (err) {
    dispatch({
      type: SET_ERROR
    });
  
      return err.message;
  }
};
