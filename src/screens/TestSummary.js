import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';

const SubmitPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scalevalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scalevalue, { toValue: 1, duration: 300, useNativeDriver: true, }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scalevalue, { toValue: 0, duration: 300, useNativeDriver: true, }).start();
        }
    }
    return <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
            <Animated.View style={styles.modalContainer, { transform: [{ scale: scalevalue }] }}>{children}</Animated.View>
        </View>

    </Modal>
};
const screenHeight = Dimensions.get('window').height;

export default function TestSummary() {

    const [visible, setVisible] = React.useState(false);

    const navigation = useNavigation();


    return (
        <View style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    
                    <Image source={images.headerlogo} style={{ width: 95, height: 53, }} />
                    
                </View>

               

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, elevation: 5, paddingTop: 20, flex: 1, paddingBottom:120  }}>

                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack,paddingBottom:30 }}>
                        Test Summary
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Name</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>Raj Kumar</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Birth</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>12/Dec/1990</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>ID(Guardian Aadhaar)</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>1234567</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Mobile Number</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>9879879876</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Address</Text>
                        <Text style={{ fontSize: 12, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>323, Village Akoda,{'\n'}District Dhar,{'\n'}Madhya Pradesh-454001</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Country</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>India</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Test Result</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#CF0A2C', fontFamily: FONTS.AvenirBlack }}>Sickle Cell Trait</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Health Worker</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>Prema Kumari</Text></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Test</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>02/Nov/2021</Text></View>

                   

                   

                    

                    <SubmitPopup visible={visible}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 280 }}>
                            <Image source={icons.greenicon} style={{ width: 50, height: 50, marginTop: 30 }} />
                            <Text style={{ fontSize: 16, padding: 30, fontWeight: '400', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirBlack, }}>Test is successfully submitted.</Text>


                            <TouchableOpacity
                               onPress={() => navigation.navigate('Home')}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 40
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 18,
                                            fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                        }}>
                                        CONTINUE
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SubmitPopup>

                </View>
               
                <View>
                <TouchableOpacity onPress={() => setVisible(true)}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                }}>
                                SUBMIT REPORT
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        </View >
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 5, paddingBottom:80
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
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 20,
        height: 30,
        backgroundColor: 'green',
        elevation: 20,
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
