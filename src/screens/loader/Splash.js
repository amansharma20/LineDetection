import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


export default function Splash() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assests/splash.png')} style={{width: '100%', height: '100%'}} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
