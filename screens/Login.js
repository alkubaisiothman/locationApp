import { Alert, View, Image } from "react-native"
import { Button, TextInput, Text } from "react-native-paper"
import { styles } from "../styles/Styles"
import { loginUser } from "../firebase/FirebaseAuthController"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"



export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    async function singInAction() {
        setError(await loginUser(email, password))
    }

    if (error) {
        Alert.alert(error)
        setError(null)
    }

    return (
        <SafeAreaView style={styles.loginPage} >
            <Image style={styles.headerImage} source={require('../assets/city.jpg')}/>
            <View>
    <Text style={styles.headline} variant="headlineSmall">Welcome to Travel Explorer!</Text>
    <Text style={styles.subHeadline} variant="bodyLarge">Log in to discover new destinations, save your favorite spots, and share your travel experiences with others.</Text>
</View>

            <View style={styles.loginContainer}>
                <Text variant="headlineSmall">Login</Text>
                <TextInput
                    mode='flat'
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    left={<TextInput.Icon icon={'email'} />}
                />
                <TextInput
                    mode='flat'
                    type='password'
                    label='password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    left={<TextInput.Icon icon={'lock'} />}
                />
                <Button
                    mode="contained"
                    onPress={singInAction}
                >Login</Button>
            </View>
        </SafeAreaView>
    )
}