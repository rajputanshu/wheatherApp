/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';

import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reduxStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import cities from './Screens/Cities'
import wheatherInfo from './Screens/WheatherInfo'
import splash from './Screens/Splash'

const Stack = createStackNavigator();

const App = () => {
  const {store,persistor} = reduxStore();
  const screenOptions = {
    headerStyle: {backgroundColor: '#00804A'},
    headerTitleStyle: { alignSelf: 'center',color:'white' },
    headerTintColor: 'white',
    title:"WeatherApp"
  };
  return (
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={splash} options={{headerShown:false}}/>
            <Stack.Screen name="Cities" component={cities} options={screenOptions}/>
            <Stack.Screen name="Info" component={wheatherInfo} options={screenOptions}/>
          </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
      );
};

const styles = StyleSheet.create({
 container: {
   flex:1,
 }
});

export default App;
