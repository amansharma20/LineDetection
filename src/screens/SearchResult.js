import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function SearchResult() {

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Search')}
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
                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 20, fontFamily: FONTS.AvenirBlack }}>
                     Details
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom:0 }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>Full Name</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>Raj Kumar</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom:0 }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>Date of Birth</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>12/12/1990</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom:0 }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>ID (Guardian Aadhaar)</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>12345662366</Text></View>

        
                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40, marginVertical: 30, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                    
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Instruction')}
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
                                Conduct Test
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>

                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40,marginVertical: 30, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Report')}
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
                                View Report
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
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 0, paddingRight: 0,
    },
    inputView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#1C1B1B',
        paddingHorizontal: 16,
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
