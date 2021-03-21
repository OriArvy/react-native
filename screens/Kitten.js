import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OfflineNotice from '../components/OfflineNotice/OfflineNotice'

const Kitten = (props) => {

    return (
        <View>
            <OfflineNotice />
            <Text style={styles.text}>This was supposed to be info about selected kitten, but I couldnt figure out how to load it without Database. If I had a Database, I assume I could just use .find method to find kitten with an ID and display his info. </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        lineHeight: 24,
        paddingTop: 60
    }
})
export default Kitten;