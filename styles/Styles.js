import { StyleSheet, Dimensions } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
    },
    loginPage: {
        flex: 1,
    },
    loginContainer: {
        flex: 1,
        margin: 12,
        padding: 18,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    map: {
        width: Dimensions.get('window').width - 24,
        height: Dimensions.get('window').height - 24,
        marginVertical: 12,
    },
    headerImage: {
        height: 160,
        width: Dimensions.get('window').width,
    },
    headline: {
        textAlign: 'center',
        marginVertical: 18,
        fontSize: 26,
        color: '#1D4ED8',
    },
    subHeadline: {
        textAlign: 'center',
        marginBottom: 18,
        fontSize: 17,
        color: '#2563EB',
    },
    itemView: {
        flexDirection: 'row',
        gap: 12,
    },
    item: {
        marginVertical: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#94A3B8',
    },
    itemText: {
        flex: 2,
        color: '#374151',
    },
    mapIcon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    rating: {
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 60,
        flex: 1,
        alignItems: 'flex-end',
    },
    countryView: {
        flexDirection: 'row',
        gap: 12,
    },
    modal: {
        height: 100,
        marginHorizontal: 40,
        padding: 18,
        alignItems: 'center',
        backgroundColor: '#E2E8F0',
        borderRadius: 10,
    },
});

export const Theme = {
    ...MD3LightTheme,
    roundness: 10,
    colors: {
        ...MD3LightTheme.colors,
        primary: "#2563EB",
        onPrimary: "#FFFFFF",
        primaryContainer: "#DBEAFE",
        onPrimaryContainer: "#1E3A8A",
        secondary: "#6B7280",
        onSecondary: "#FFFFFF",
        secondaryContainer: "#E5E7EB",
        onSecondaryContainer: "#374151",
        background: "#F9FAFB",
        onBackground: "#1F2937",
        surface: "#FFFFFF",
        onSurface: "#1F2937",
        surfaceVariant: "#E2E8F0",
        onSurfaceVariant: "#374151",
        error: "#DC2626",
        onError: "#FFFFFF",
        errorContainer: "#FECACA",
        onErrorContainer: "#991B1B",
    },
};
