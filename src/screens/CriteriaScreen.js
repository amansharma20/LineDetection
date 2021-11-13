/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { SIZES, FONTS } from '../Constants/Theme';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import { useMutation } from '@apollo/client';
import { GQLMutation } from '../persistance/mutation/Mutation';


const stylesCheckbox = {
    textStyle: { textDecorationLine: 'none', color: '#101E8E', marginRight: 40 },
};

const staticData = [
    {
        id: 0,
        fillColor: '#101E8E',
        text: 'Yes',
        textStyle: stylesCheckbox.textStyle,

    },
    {
        id: 1,
        fillColor: '#101E8E',
        text: 'No',
        textStyle: stylesCheckbox.textStyle,
    },
];

const NoTestPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scalevalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scalevalue, { toValue: 1, duration: 300, useNativeDriver: true }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scalevalue, { toValue: 0, duration: 300, useNativeDriver: true }).start();
        }
    };
    return <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
            <Animated.View style={styles.modalContainer, { transform: [{ scale: scalevalue }] }}>{children}</Animated.View>
        </View>

    </Modal>;
};

const NoConsentPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scalevalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scalevalue, { toValue: 1, duration: 300, useNativeDriver: true }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scalevalue, { toValue: 0, duration: 300, useNativeDriver: true }).start();
        }
    };
    return <Modal transparent visible={showModal}>
        <View style={styles.modalBackground}>
            <Animated.View style={styles.modalContainer, { transform: [{ scale: scalevalue }] }}>{children}</Animated.View>
        </View>

    </Modal>;
};
const screenHeight = Dimensions.get('window').height;
export default function CriteriaScreen() {

    const navigation = useNavigation();
    const [noTestPopup, setnoTestPopup] = React.useState(false);
    const [noConsentPopup, setnoConsentPopup] = React.useState(false);


    const [addDetailsMutation, { data: testResponse, error: testError, loading }] = useMutation(GQLMutation.ADD_TEST);
    const submitUserDetails = () => {
        addDetailsMutation({
            variables: {
                BloodTransfusion: noTestPopup,
                ConsentFromPerson: noConsentPopup,
                CountDown: "0.0",
                Latitude: 0,
                Longitude: 0,
                PatientId: 9,
                SickleScanTestResult: "HBBA"
            }
        });

    }


    console.log(testResponse)
    console.log(testError)


    return (
        <View style={styles.MainContainer}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>

                    <Image source={images.headerlogo} style={{ width: 95, height: 53 }} />

                </View>

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 30, elevation: 5, padding: 20, paddingBottom: 280, flex: 1 }}>


                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Qualifying Criteria
                    </Text>

                    <Text style={{ fontSize: 16, padding: 10, fontFamily: FONTS.AvenirRoman, color: '#000000', fontWeight: '400' }}>Do you have the consent from the person/guardian to conduct the test?</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <BouncyCheckboxGroup
                            text={staticData}
                            data={staticData}
                            onChange={(selectedItem: ICheckboxButton) => {
                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                if (selectedItem.id === 1) {
                                    setnoConsentPopup(true)
                                }
                            }}

                        />
                    </View>


                    <Text style={{ fontSize: 16, padding: 10, paddingTop: 30, fontFamily: FONTS.AvenirRoman, color: '#000000', fontWeight: '400' }}>Was a blood transfusion received in the past 6 months?</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <BouncyCheckboxGroup
                            data={staticData}
                            // onPress={() => setVisible(true)}
                            onChange={(selectedItem: ICheckboxButton,) => {
                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                if (selectedItem.id === 0) {
                                    setnoTestPopup(true)
                                }
                            }}

                        />
                    </View>




                    <NoTestPopup visible={noTestPopup}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                            <Image source={icons.erroricon} style={{ width: 50, height: 50, marginTop: 30 }} />
                            <Text style={{ fontSize: 16, padding: 20, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Sickle SCAN test should not {'\n'}performed within 6 months {'\n'}of receiving a blood transfusion</Text>

                            <TouchableOpacity
                                onPress={() => setnoTestPopup(false)}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 20,
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 14,
                                            fontWeight: 'bold', fontFamily: FONTS.AvenirBlack,

                                        }}>
                                        OK
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </NoTestPopup>

                    <NoConsentPopup visible={noConsentPopup}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                            <Image source={icons.erroricon} style={{ width: 50, height: 50, marginTop: 30 }} />
                            <Text style={{ fontSize: 16, padding: 20, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>It is mandatory to get {'\n'}consent of the person {'\n'}getting tested</Text>
                            <TouchableOpacity
                                onPress={() => setnoConsentPopup(false)}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 20,
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 14,
                                            fontWeight: 'bold', fontFamily: FONTS.AvenirBlack,

                                        }}>
                                        OK
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </NoConsentPopup>

                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'white', elevation: 8, flexDirection: 'row', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            width: 150, height: 50
                        }}>
                        <View style={{
                            backgroundColor: '#ffffff', width: '100%', height: 50, borderRadius: 50, alignItems: 'center',
                            justifyContent: 'center', borderColor: '#222D81', borderWidth: 1, flex: 1,
                        }}>
                            <Text
                                style={{
                                    color: '#222D81',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    fontFamily: FONTS.AvenirBlack,
                                }}>
                                TEST LATER
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            submitUserDetails();
                            navigation.navigate('Instruction');
                        }
                        }
                        style={{
                            width: 150, height: 50
                        }}>
                        <View style={{
                            backgroundColor: '#222D81', width: '100%', height: 50, borderRadius: 50, alignItems: 'center',
                            justifyContent: 'center', flex: 1,
                        }}>
                            <Text
                                style={{
                                    color: '#ffffff',
                                    fontSize: 18,
                                    fontWeight: 'bold', fontFamily: FONTS.AvenirBlack,

                                }}>
                                START TEST
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20, paddingLeft: 0, paddingRight: 0,
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
        backgroundColor: 'white',
        flex: 1,
    },
    textStyle: {
        color: 'red',
    },
});
