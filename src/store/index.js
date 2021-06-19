import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { wheather } from './reducers/wheather';

//Here we wrap all the reucers in a single reducer beacuse our persistReduer takes only one reducer
const reducer = combineReducers({
  wheather: wheather,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const initialState = {};

const middleWare = [thunk];

export default () => {
  const store = createStore(persistedReducer, initialState, applyMiddleware(...middleWare));
  const persistor = persistStore(store);
  return { store, persistor };
};
