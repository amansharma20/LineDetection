import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { GQLQuery } from '../persistance/query/GQLQuery';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';

const SendPopup = ({ visible, children }) => {
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

export default function PatientReport(props) {

    // console.log(props)

    
    
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();

    const { data, error } = useQuery(GQLQuery.SEARCH_PATIENT_RECORD);
    const PatientData = data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch;
    
console.log(data)
console.log('data')
console.log(error)    

    return (
        <View style={styles.MainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                        <View>
                            <Image source={icons.backarrow} style={{ width: 25, height: 25 }} />
                        </View>
                    </TouchableOpacity>

                    <Image source={images.headerlogo} style={{ width: 95, height: 53, alignItems: 'center', justifyContent: 'center' }} />
                    <View></View>
                </View>

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, elevation: 5, padding: 10, flex: 1, marginTop: 70 }}>

                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingBottom: 30 }}>
                        Test Report
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Name</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.Patient.FullName}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Birth</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.Patient.DateOfBirth}</Text></View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>ID(Guardian Aadhaar)</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>12345662366</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Mobile Number</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.Patient.MobileNumber}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Address</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.Patient.HouseNumber} {Report.Patient.StreetRoadLane} {Report.Patient.City} {Report.Patient.District} {Report.Patient.State}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Country</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.Patient.Country}</Text></View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Test Result</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#CF0A2C', fontFamily: FONTS.AvenirBlack }}>{Report.SickleScanTestResult}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Health Worker</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.HealthWorkerUser.FirstName} {Report.HealthWorkerUser.LastName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Test</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Report.CreatedDateTimeUtc}</Text></View>


                    <SendPopup visible={visible}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                            <Image source={icons.erroricon} style={{ width: 50, height: 50, marginTop: 30 }} />
                            <Text style={{ fontSize: 16, padding: 30, fontWeight: '400', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirBlack }}>No records found</Text>


                            <TouchableOpacity
                                onPress={() => setVisible(false)}
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
                                        TRY AGAIN
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SendPopup>

                </View>


            </ScrollView >
        </View >
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5,
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
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
