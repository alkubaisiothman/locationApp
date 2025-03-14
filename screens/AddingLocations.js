import { StatusBar } from 'expo-status-bar'
import { useState, useContext } from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Rating } from 'react-native-ratings'
import { DataContext } from '../contexts/dataContext'
import { LocationContext } from '../contexts/locationContext'
import { addLocation, useFireLocations } from '../firebase/FirebaseController'
import { styles, Theme } from "../styles/Styles"

export function AddingLocation() {

    const locations = useFireLocations()

    const { data, setData } = useContext(DataContext)
    const { location, setLocation } = useContext(LocationContext)

    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)

    function addToList() {
        const newLocation = {
            location: location,
            description: description,
            rating: rating
        }
        setData([...data, newLocation])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headline} variant='headlineMedium'>Add New Location</Text>
            <TextInput
                mode='flat'
                label='Location'
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                mode='flat'
                label='Description'
                value={description}
                onChangeText={setDescription}
            />
            <Rating
                type='custom'
                ratingColor={Theme.colors.primary}
                tintColor={Theme.colors.elevation.level3}
                imageSize={55}
                ratingCount={5}
                startingValue={rating}
                onFinishRating={setRating}
                ratingContainerStyle={styles.rating}
            />
            <Button
                mode="contained"
                onPress={() => {
                    addToList()
                    addLocation(location, description, rating)
                    setLocation('')
                    setDescription('')
                    setRating('')
                }}
            >Save</Button>
        </View>
    )
}