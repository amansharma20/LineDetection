import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import images from '../Constants/Images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function ClinicalInformation() {

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
                        Clinical Information
                    </Text>
                    <View style={styles.inputs}>
                        <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Patient Name</Text>
                            <Text style={{ fontSize: 14, marginLeft: 80, color: '#989898', fontFamily: FONTS.AvenirBlack }}>Arvind Chand</Text></View>

                        <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0 }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Adhaar Number</Text>
                            <Text style={{ fontSize: 14, marginLeft: 70, color: '#989898', fontFamily: FONTS.AvenirBlack }}>12345662366</Text></View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Height</Text>
                            <Text style={{ fontSize: 14, padding: 10, marginLeft: 90, fontFamily: FONTS.AvenirBlack }}>Weight</Text></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={styles.smalltextInput}
                                placeholder=''
                                padding={10}
                                maxLength={20} />

                            <TextInput
                                style={styles.smalltextInput}
                                placeholder=''
                                padding={10}
                                marginLeft={30}
                                maxLength={20} /></View>


                        <Text style={{ fontSize: 14, padding: 10, marginTop: 10, fontFamily: FONTS.AvenirBlack }}>More Information</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Hemolytic Faeces</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Pallor</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Jaundice</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Edema</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Leg Ulcers</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Hepatomegaly</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack }}>Splenomegaly</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 14, padding: 10, fontFamily: FONTS.AvenirBlack, flexWrap: 'wrap' }}>Any systematic {"\n"}abnormalities</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="Yes"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />
                                <BouncyCheckbox
                                    size={18}
                                    fillColor="#101E8E"
                                    unfillColor="#FFFFFF"
                                    text="No"
                                    style={{ padding: 5 }}
                                    iconStyle={{ borderColor: "#101E8E" }}
                                    textStyle={{
                                        textDecorationLine: "none", fontFamily: FONTS.AvenirBlack
                                    }}
                                />

                            </View></View>


                        <TextInput
                            style={styles.textInput}
                            placeholder='Specify if yes'
                            maxLength={20} />
                    </View>
                </View>
            </ScrollView>
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
    smalltextInput: {
        borderColor: '#989898',
        width: 120,
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
        paddingHorizontal: 16,
    },
    textInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
        padding: 10,
    },
    inputs: {
        height: '47%',
        paddingTop: 10,
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
    }
});
