import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import images from '../Constants/Images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function SymptomsScreen() {

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

                <View style={{ backgroundColor: 'white', margin: 5, elevation: 5, padding: 20, paddingBottom: 80, flex: 1 }}>


                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Patient Symptoms
                    </Text>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Patient Name</Text>
                            <Text style={{ fontSize: 14, marginLeft: 80, color: '#989898', fontFamily: FONTS.AvenirBlack }}>Arvind Chand</Text></View>

                        <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Adhaar Number</Text>
                            <Text style={{ fontSize: 14, marginLeft: 70, color: '#989898', fontFamily: FONTS.AvenirBlack }}>12345662366</Text></View>


                        <Text style={{ fontSize: 14, fontWeight: '400', padding: 10, paddingTop: 20, fontFamily: FONTS.AvenirBlack }}>Symptoms</Text>

                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Fatigue"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontSize: 16, fontWeight: '400', fontFamily: FONTS.AvenirBlack, textAlign:'center', justifyContent:'center'
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Dyspnea"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack, fontSize: 16
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Recurrent Fever"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Abdominal Pain"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Chest Pain"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Bone &amp; Joint Pain"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Pollar"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <BouncyCheckbox
                            size={20}
                            fillColor="#101E8E"
                            unfillColor="#FFFFFF"
                            text="Jaundice"
                            iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                            textStyle={{
                                textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#101E8E"
                                unfillColor="#FFFFFF"
                                text="Any other"
                                iconStyle={{ borderColor: "#101E8E", marginTop: 10 }}
                                textStyle={{
                                    textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                }}
                            />
                            <TextInput
                                style={styles.smalltextInput}
                                placeholder='Specify'
                                padding={10}
                                maxLength={20} />
                        </View>
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
    textInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
        paddingHorizontal: 16,
    },
    smalltextInput: {
        borderColor: '#989898',
        width: 150,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
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
