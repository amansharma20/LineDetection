import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import CommonHeader from '../components/CommonHeader';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function InstructionsScreen() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20  }} showsVerticalScrollIndicator={false}>
                <CommonHeader />

                <View style={{  marginHorizontal: 20, elevation: 5, padding: 20, flex: 1, backgroundColor: 'white', flex: 1, marginTop: 40 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Step by Step Instructions
                    </Text>
                    <View style={styles.inputs}>


                        <View style={{ alignItems: 'center', padding: 40 }}>
                            <Image source={images.sample2} style={{ width: 200, height: 200, resizeMode: 'stretch' }} />
                        </View>
                        <Text style={{ fontSize: 16, padding: 10, justifyContent: 'center', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirRoman }}>Place the sample into{'\n'} the PreTreatment Module{'\n'} loaded with buffer{'\n'} solution</Text>

                    </View>

                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ paddingBottom: 20, elevation: 8, backgroundColor: 'white', paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PreTreatment')}
                        activeOpacity={0.9}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 8
                        }}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    //  fontFamily: FONTS.AvenirBlack

                                }}>
                                CONTINUE
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StopWatch')}>
                        <Text style={{ fontSize: 18, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingTop: 10 }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 0, paddingRight: 0, 
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
        elevation: 8,
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    }
});
