import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { icons } from '../Constants/Index';
import { SIZES, FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function Counselling() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Information')}
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

                <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 30, elevation: 5, padding: 20, flex: 1, height: 350 }}>


                    <Text style={{ fontSize: 20, padding: 10, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Counselling
                    </Text>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Patient Name</Text>
                            <Text style={{ fontSize: 14, marginLeft: 80, color: '#989898', fontFamily: FONTS.AvenirBlack }}>Arvind Chand</Text></View>

                        <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Adhaar Number</Text>
                            <Text style={{ fontSize: 14, marginLeft: 70, color: '#989898', fontFamily: FONTS.AvenirBlack }}>12345662366</Text></View>

                        <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Counselling Information</Text>

                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Introduction to Disease"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Family Planning"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Diet Management"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Dealing with Complications"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Treatment for Sickle Cell Disease"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />

                    </View>
                </View>

                <View style={{ justifyContent: 'center', paddingVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddressPage')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                }}>
                                SUBMIT
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>


                {/* </View> */}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white'
    }
});
