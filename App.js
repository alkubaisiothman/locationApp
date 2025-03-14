import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, IconButton, PaperProvider } from 'react-native-paper'
import { DataProvider } from './contexts/dataContext'
import { LocationProvider } from './contexts/locationContext'
import { Login } from './screens/Login'
import { Locations } from './screens/Locations'
import { AddingLocation } from './screens/AddingLocations'
import { MapScreen } from './screens/MapScreen'
import { Capitals } from './screens/Capitals'
import { logoutUser, useFireAuth } from './firebase/FirebaseAuthController'
import { UserContext } from './contexts/userContext'
import { useContext } from 'react'
import { UserLocationContext } from './contexts/UserLocationsContext'
import { Theme } from './styles/Styles'


export default function App() {

  const [user, locations] = useFireAuth()

  return (
    <PaperProvider theme={Theme}>
      <UserLocationContext.Provider value={locations}>
        <UserContext.Provider value={user}>
          <DataProvider>
            <LocationProvider>
              <NavigationContainer>
                {user ? <Navigation /> : <Login />}
              </NavigationContainer>
            </LocationProvider>
          </DataProvider>
        </UserContext.Provider>
      </UserLocationContext.Provider>
    </PaperProvider>
  )
}

function Navigation() {

  const Tab = createBottomTabNavigator()

  const LOCATIONS = 'Locations'
  const ADDING = 'Adding Location'
  const MAP = 'Map'
  const CAPITALS = 'Capitals'
  const user = useContext(UserContext)

  return (
    <Tab.Navigator screenOptions={{
      headerTitle: user.email,
      headerTitleAlign: 'center',
      headerRight: () => <IconButton icon={'logout'} onPress={logoutUser} />
    }}>
      <Tab.Screen
        name={LOCATIONS}
        component={Locations}
        options={{ 
          tabBarIcon: () => <Icon source={'map-marker'} size={20} color={Theme.colors.inverseSurface}/> }}
      />
      <Tab.Screen
        name={ADDING}
        component={AddingLocation}
        options={{ tabBarIcon: () => <Icon source={'plus-circle'} size={20} color={Theme.colors.inverseSurface}/> }}
      />
      <Tab.Screen
        name={MAP}
        component={MapScreen}
        options={{ tabBarIcon: () => <Icon source={'map'} size={20} color={Theme.colors.inverseSurface}/> }}
      />
      <Tab.Screen
        name={CAPITALS}
        component={Capitals}
        options={{ tabBarIcon: () => <Icon source={'city-variant'} size={20} color={Theme.colors.inverseSurface} /> }}
      />
    </Tab.Navigator>

  )
}