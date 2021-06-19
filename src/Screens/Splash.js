import React,{useEffect,useState} from 'react'
import {ActivityIndicator,SafeAreaView, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {getAllCities} from '../store/actions/wheather';

const Splash = (props) => {
    const [isLoading,setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getAllCities()).then(promiseValue => {
            setIsLoading(false);
            if(promiseValue){
                props.navigation.replace('Cities')
            }
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>WeatherApp</Text>
            {isLoading ? (
                <ActivityIndicator color="#00804A" />
            ):(<></>)}
            
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textStyle:{
        fontFamily: 'Roboto',
        fontSize:40, 
        color:'#00804A'
    }
})
