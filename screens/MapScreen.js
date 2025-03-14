import { StatusBar } from 'expo-status-bar'
import { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { LocationContext } from '../contexts/locationContext'
import { styles } from "../styles/Styles"


export function MapScreen() {

    const { location } = useContext(LocationContext)

    const [latitude, setLatitude] = useState(65.0120888)
    const [longnitude, setLongnitude] = useState(25.465077299999997)

    useEffect(() => {

        async function getLocation() {

            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('No permission')
                return
            }
            const place = await Location.geocodeAsync(location)
            setLatitude(place[0].latitude)
            setLongnitude(place[0].longitude)    
        }
        getLocation()
    }, [location]
    )
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                region={{
                    latitude: latitude,
                    longitude: longnitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </SafeAreaView>

    )
}