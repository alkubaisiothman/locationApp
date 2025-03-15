import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { SafeAreaView, ScrollView, View, Image } from "react-native";
import { Button, Modal, Portal, Searchbar, Text } from "react-native-paper";
import { styles, Theme } from "../styles/Styles";

export function Capitals() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [countryDetails, setCountryDetails] = useState({ name: "", capital: "", flag: "" });
    const [alertMessage, setAlertMessage] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const fetchCountryData = useCallback(() => {
        if (!searchQuery.trim()) {
            setAlertMessage("Please enter a country name");
            showModal();
            return;
        }

        axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`)
            .then((response) => {
                const country = response.data[0];
                setCountryDetails({
                    name: country.name.common,
                    capital: country.capital ? country.capital[0] : "No capital",
                    flag: country.flags.png,
                });
                setSearchQuery("");
            })
            .catch(() => {
                setAlertMessage("Country not found. Please try again.");
                showModal();
            });
    }, [searchQuery]);

    useEffect(() => {
        if (countryDetails.name && countryDetails.capital && countryDetails.flag) {
            setData((prevData) => {
                if (!prevData.some((item) => item.name === countryDetails.name)) {
                    return [...prevData, countryDetails];
                }
                return prevData;
            });
        }
    }, [countryDetails]);

    useEffect(() => {
        if (alertMessage) {
            showModal();
        }
    }, [alertMessage]);

    const filteredResults = data.filter((item) => {
        const query = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(query) || item.capital.toLowerCase().includes(query);
    });

    return (
        <SafeAreaView style={[styles.scroll, styles.container]}>
            <Portal>
                <Modal style={styles.modal} visible={modalVisible} onDismiss={hideModal}>
                    <Text>{alertMessage}</Text>
                </Modal>
            </Portal>

            <Text style={styles.headline} variant="headlineSmall">
                Search Country by Name
            </Text>

            <Searchbar
                placeholder="Search Country or Capital"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <Button mode="contained" onPress={fetchCountryData}>
                Search
            </Button>

            <ScrollView>
                {filteredResults.map((item, index) => (
                    <View
                        key={index}
                        style={[styles.item, styles.countryView, { backgroundColor: Theme.colors.elevation.level3 }]}
                    >
                        <View style={styles.itemText}>
                            <Text variant="titleMedium">{item.name}</Text>
                            <Text variant="bodyLarge">{item.capital}</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: item.flag }} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}