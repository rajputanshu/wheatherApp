import React,{useEffect,useState} from 'react'
import { SafeAreaView,StyleSheet,FlatList,ActivityIndicator, Text, View,TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const Cities = (props) => {
    const [newProducts,setNewProducts] = useState([]);
    const userproducts = useSelector(state => state.wheather.data);
    useEffect(() => {
        setNewProducts(userproducts);
    }, []);

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={() => { props.navigation.navigate('Info', { city: item.name })}} style={styles.main}>
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.status}>{item.weather[0].description}</Text>
            </View>
            <View style={styles.tempContainer}>
                <Text style={styles.temp}>{Math.floor(item.main.temp)} &#x2103;</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        
        return (
        <Item
            item={item}
            // onPress={() => setSelectedId(item.id)}
            // backgroundColor={{ backgroundColor }}
            // textColor={{ color }}
        />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {!newProducts ? (
                <ActivityIndicator color="#00804A" />
            ):(
                <FlatList
                    data={newProducts.list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
            
        </SafeAreaView>
    )
}

export default Cities

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    main: {
        borderBottomColor:'#ede9e8',
        borderBottomWidth:1,
        paddingHorizontal:17,
        paddingVertical:15,
        flexDirection:'row',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize:20,
        paddingBottom:10
    },
    status: {
        fontFamily: 'Roboto',
        fontSize:16,
    },
    tempContainer: {
        flex:1,
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    temp: {
        marginLeft:'auto',
        fontSize:30
    }
})
