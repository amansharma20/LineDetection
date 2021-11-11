import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function InstructionsScreen() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                   
                    <Image source={images.headerlogo} style={{ width: 95, height: 53, }} />
                   
                </View>

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 30, elevation: 5, padding: 20, flex: 1 }}>


                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Step by Step Instructions
                    </Text>
                    <View style={styles.inputs}>

                        <View style={{ alignItems: 'center', padding: 100 }}>
                            <Image source={images.sample1} style={{ width: 200, height: 200, resizeMode: 'stretch' }} />
                        </View>
                        <Text style={{ fontSize: 16, padding: 10, justifyContent: 'center', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirRoman }}>Use the included Capillary Sampler to obtain  5µL whole blood.</Text>
                       
                    </View>

                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Buffer')}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                }}>
                                CONTINUE
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                        onPress={() => navigation.navigate('StopWatch')}>
                <Text style={{ fontSize: 18, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingTop:10 }}>
                        Skip
                    </Text></TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20, paddingLeft: 0, paddingTop:0, paddingRight: 0,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 100,
        marginTop: 30,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
    },
    textInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#1C1B1B',
        paddingHorizontal: 16,
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