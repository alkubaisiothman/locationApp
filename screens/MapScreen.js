import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useContext, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { LocationContext } from '../contexts/locationContext';
import { styles } from '../styles/Styles';

export function MapScreen() {
    const { location } = useContext(LocationContext);
    const [coords, setCoords] = useState({ latitude: 65.0120888, longitude: 25.4650773 });

    const getLocation = useCallback(async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.warn('No location permission granted');
            return;
        }
        const [place] = await Location.geocodeAsync(location);
        if (place) {
            setCoords({ latitude: place.latitude, longitude: place.longitude });
        }
    }, [location]);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={{
                    ...coords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </SafeAreaView>
    );
}