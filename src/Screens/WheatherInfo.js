import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,ActivityIndicator,Image } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import {getfullinfo} from '../store/actions/wheather';
import MapView ,{Marker}from 'react-native-maps';

const WheatherInfo = (props) => {
    const [isLoading,setIsLoading] = useState(true);
    const [lat,setLat] = useState('');
    const [lon,setLon] = useState('');
    const [name,setName] = useState('');
    const [status,setStatus] = useState('');
    const [country,setCountry] = useState('');
    const [humidity,setHumidity] = useState('');
    const [windspeed,setWindSpeed] = useState('');
    const [maxtemp,setMaxTemp] = useState('');
    const [mintemp,setMinTemp] = useState('');
    const [temp,setTemp] = useState('');
    const dispatch = useDispatch();
    const city = props.route.params.city;
    useEffect(() => {
        dispatch( getfullinfo(city)).then(promiseValue => {
            setIsLoading(false);
            if(promiseValue){
                setLon(promiseValue.coord.lon)
                setLat(promiseValue.coord.lat)
                setName(promiseValue.name)
                setStatus(promiseValue.weather[0].description)
                setCountry(promiseValue.sys.country)
                setHumidity(promiseValue.main.humidity)
                setWindSpeed(promiseValue.wind.speed)
                setMaxTemp(Math.floor(promiseValue.main.temp_max))
                setMinTemp(Math.floor(promiseValue.main.temp_min))
                setTemp(Math.floor(promiseValue.main.temp))
            }  
        })
    }, [])
    // if(Object.entries(apiData).length === 0){
    //     console.log("find");
    // }
    return (
        
        <View>            
         {isLoading ? (
                <ActivityIndicator color="#00804A" />
            ):(
                <MapView
                style={{height:"80%",width:"100%"}}
                region={{
                    latitude:Number(lat),
                    longitude:Number(lon),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude:Number(lat),
                        longitude:Number(lon),
                    }}
                    image={require('../assets/marker.png')}
                    title={name}
                >
                </Marker>
            </MapView>
            )}
            <View style={styles.contentContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.country}>{name +` `+ country}</Text>
                    <Text style={styles.content}>{status}</Text>
                    <Text style={styles.content}>Humidity: {humidity}</Text>
                    <Text style={styles.content}>Wind Speed: {windspeed}</Text>
                    <Text style={styles.content}>Max. Temp.: {maxtemp} &#x2103;</Text>
                    <Text style={styles.content}>Min. Temp.: {mintemp} &#x2103;</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.temp}>{Math.floor(temp)} &#x2103;</Text>
                </View>
            </View>
        </View>
    )
}

export default WheatherInfo

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    contentContainer: {
        paddingHorizontal:20,
        paddingTop:10,
        flexDirection:'row',
        flex:1,
    },
    leftContainer: {

    },
    rightContainer: {
        flex:1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    country: {
        fontSize:20,
        fontWeight:'bold'
    },
    content: {
        fontSize: 16,
        paddingTop:5
    },
    temp: {
        marginLeft:'auto',
        fontSize:30,
        paddingRight:30
    }

})
