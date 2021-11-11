import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;
export default function BarcodeScreen() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView contentContainerStyle showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SampleTest')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                        <View
                            style={styles.header}>

                            <Image source={icons.backarrow} style={{ width: 25, height: 25 }} />
                        </View></TouchableOpacity>
                    <Image source={images.headerlogo} style={{ width: 95, height: 53, }} />
                    <Image source={images.profile} style={{ width: 55, height: 55, borderRadius: 100, borderColor: '#CF0A2C', }} />
                </View>

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 30, elevation: 5, padding: 20, flex: 1 }}>

                    <View style={styles.inputs}>

                        <Image source={images.samplebar} style={{ width: 280, height: 500 }} />

                    </View>
                </View>
                <Text style={{ fontSize: 16, padding: 30, fontWeight: '800', justifyContent: 'center', textAlign: 'center', fontFamily: FONTS.AvenirRoman }}>Please align the QR/ Barcode in the frame above to scan it</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 0, paddingRight: 0,
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
