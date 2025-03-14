import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Text, IconButton } from 'react-native-paper'
import { Rating } from 'react-native-ratings'
import { LocationContext } from '../contexts/locationContext'
import { useNavigation } from '@react-navigation/native'
import { styles, Theme } from "../styles/Styles"
import { UserLocationContext } from '../contexts/UserLocationsContext'

export function Locations() {

    const { setLocation } = useContext(LocationContext)

    const navigation = useNavigation()

    const locations = useContext(UserLocationContext)

    return (
            <View style={styles.container}>
                <Text style={styles.headline} variant='headlineMedium'>My Locations</Text>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Adding Location')}
                >Add New Location</Button>
                <ScrollView>
                    {locations.map((item, index) => (
                        <View style={[styles.item, { backgroundColor: Theme.colors.elevation.level3 }]} key={index}>
                            <View style={styles.itemView}>
                                <View >
                                    <Text variant="headlineSmall">{item.location}</Text>
                                    <Text variant="bodyLarge">{item.description}</Text>
                                </View>
                                <IconButton
                                    iconColor={Theme.colors.secondary}
                                    style={styles.mapIcon}
                                    icon="map-marker"
                                    size={40}
                                    onPress={() => {
                                        setLocation(item.location)
                                        navigation.navigate('Map')
                                    }}
                                />
                            </View>
                            <Rating
                                type='custom'
                                ratingColor={Theme.colors.primary}
                                tintColor={Theme.colors.elevation.level3}
                                ratingCount={5}
                                startingValue={item.rating}
                                readonly
                                starContainerStyle={{
                                    alignSelf: "center",
                                    backgroundColor: '#e7edda'
                                }}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
    )
}