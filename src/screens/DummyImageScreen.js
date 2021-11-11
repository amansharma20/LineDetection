/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../Constants/Index';

export default function DummyImageScreen(props) {
    const navigation = useNavigation();
    console.log(props)

    const imageData = props.route.params.base64;

    return (
        <View style={styles.container}>
            <Image style={{ width: 300, height: 300, resizeMode: 'contain' }}
                source={{ uri: `data:image/jpeg;base64,${imageData}` }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});
