import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function PatientInformation() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
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
                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                    Patient Information
                </Text>
                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Symptoms')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View style={styles.inputView}>
                            <Text
                                style={{
                                    color: '#101E8E',
                                    fontSize: 20,
                                    fontWeight: '400', fontFamily: FONTS.AvenirBlack

                                }}>
                                Add Symptoms
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>
                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40, marginVertical: 30, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                }}>
                    <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ClinicalInformation')}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View style={styles.inputView}>
                                <Text
                                    style={{
                                        color: '#101E8E',
                                        fontSize: 20,
                                        fontWeight: '400', fontFamily: FONTS.AvenirBlack

                                    }}>
                                    Add Clinical Data
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40, marginVertical: 10, elevation: 5, padding: 20, paddingVertical: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                }}>
                    <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Counselling')}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <View style={styles.inputView}>
                                <Text
                                    style={{
                                        color: '#101E8E',
                                        fontSize: 20,
                                        fontWeight: '400', fontFamily: FONTS.AvenirBlack

                                    }}>
                                    Add Counselling Data
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5,
    },
    inputView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
