import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f4f7fb', // Vaaleansininen harmaa tausta
    },
    container: {
        flex: 1,
        marginHorizontal: 10,
        gap: 10,
    },
    loginPage: {
        flex: 1,
    },
    loginContainer: {
        flex: 1,
        margin: 10,
        gap: 10,
        backgroundColor: '#ffffff', // Valkoinen tausta login-sivulle
        borderRadius: 10, // Pyöristetyt kulmat
        padding: 20,
    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 20,
        marginVertical: 10,
    },
    headerImage: {
        height: 150,
        width: Dimensions.get('window').width,
    },
    headline: {
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 28,
        color: '#1E3A8A', // Tummansininen otsikko
    },
    subHeadline: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        color: '#3B82F6', // Sininen alateksti
    },
    itemView: {
        flexDirection: 'row',
        gap: 10,
    },
    item: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#CBD5E1', // Vaaleansininen reunus
    },
    itemText: {
        flex: 2,
        color: '#4B5563', // Tummanharmaa teksti
    },
    mapIcon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    rating: {
        alignItems: 'space-between',
    },
    image: {
        width: 100,
        height: 60,
        flex: 1,
        alignItems: 'flex-end',
    },
    countryView: {
        flexDirection: 'row',
        gap: 10,
    },
    modal: {
        height: 100,
        marginHorizontal: 40,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f1f5f9', // Vaaleanharmaa modalin tausta
        borderRadius: 8, // Pyöristetyt kulmat
    },
});

export const Theme = {
    ...MD3LightTheme,
    roundness: 8,
    colors: {
        ...MD3LightTheme.colors,
        primary: "#3B82F6", // Sininen pääväri
        onPrimary: "#FFFFFF", // Valkoinen teksti pääväriin
        primaryContainer: "#BFDBFE", // Vaaleansininen sävy
        onPrimaryContainer: "#1E40AF", // Tummansininen sävy
        secondary: "#6B7280", // Tummanharmaa
        onSecondary: "#FFFFFF", // Valkoinen teksti
        secondaryContainer: "#D1D5DB", // Vaaleanharmaa
        onSecondaryContainer: "#4B5563", // Tummanharmaa
        background: "#FFFFFF", // Valkoinen tausta
        onBackground: "#1F2937", // Tummanharmaa teksti taustalle
        surface: "#FFFFFF", // Valkoinen pinta
        onSurface: "#1F2937", // Tummanharmaa teksti pinnalla
        surfaceVariant: "#E5E7EB", // Vaaleanharmaa
        onSurfaceVariant: "#4B5563", // Tummanharmaa
        error: "#EF4444", // Punainen virheväri
        onError: "#FFFFFF", // Valkoinen teksti virheelle
        errorContainer: "#FEE2E2", // Vaaleanpunainen virhealue
        onErrorContainer: "#9B2C2C", // Tumma punainen virhealueelle
    },
};
