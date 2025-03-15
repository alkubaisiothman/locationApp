import { Alert, View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { styles } from "../styles/Styles";
import { loginUser } from "../firebase/FirebaseAuthController";
import { useState, useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    const handleSignIn = useCallback(async () => {
        const error = await loginUser(email, password);
        setErrorMsg(error);
    }, [email, password]);

    useEffect(() => {
        if (errorMsg) {
            Alert.alert(errorMsg);
            setErrorMsg(null);
        }
    }, [errorMsg]);

    return (
        <SafeAreaView style={styles.loginPage}>
            <Image style={styles.headerImage} source={require("../assets/city.jpg")} />
            
            <View>
                <Text style={styles.headline} variant="headlineSmall">
                    Welcome to Travel Explorer!
                </Text>
                <Text style={styles.subHeadline} variant="bodyLarge">
                    Log in to discover new destinations, save your favorite spots, and share your travel experiences with others.
                </Text>
            </View>

            <View style={styles.loginContainer}>
                <Text variant="headlineSmall">Login</Text>
                <TextInput
                    mode="flat"
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    left={<TextInput.Icon icon={"email"} />}
                />
                <TextInput
                    mode="flat"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    left={<TextInput.Icon icon={"lock"} />}
                />
                <Button mode="contained" onPress={handleSignIn}>
                    Login
                </Button>
            </View>
        </SafeAreaView>
    );
}