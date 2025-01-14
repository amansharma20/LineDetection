import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, Modal, Animated } from 'react-native';
import CommonBottomButton from '../CommonBottomButton';
import CommonHeader from '../components/CommonHeader';
import { format } from 'date-fns';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import { useMutation, useQuery } from '@apollo/client';
import { GQLQuery } from '../persistance/query/GQLQuery';
import { GQLMutation } from '../persistance/mutation/Mutation';

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

export default function TestSummary(props) {

    const Record = props.route.params.Record.Record;
    const result = props.route.params.result;
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();

    const formatedDate = (date) => {
        var formattedDate = format(date, 'd MMM yyyy');
        return formattedDate;
    };

    const { data, error } = useQuery(GQLQuery.GET_PROFILE);
    const HealthWorkerProfileData = data && data.HealthWorkerUserQuery && data.HealthWorkerUserQuery.GetHealthWorkerUserDetails;

     
    useEffect(()=>{
        if(testReportResponse && testReportResponse.AddSickleScanTestMutation && testReportResponse.AddSickleScanTestMutation.AddTestForPatient != undefined){
            setVisible(true)
        }
    })

    
    console.log(testReportResponse)

    return (
        <View style={styles.mainContainer}>

            <View style={{backgroundColor: 'white', flex: 1}} showsVerticalScrollIndicator={false}>
                <View style={{paddingVertical: 40}}>
                    <CommonHeader />
                </View>
                <View style={{ backgroundColor: 'white', marginHorizontal: 20, elevation: 5, paddingTop: 20, flex: 1, paddingBottom: 0 }}>

                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingBottom: 0 }}>
                        Test Summary
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Name</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Record.FullName}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Gender</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Record.Gender}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Birth</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{formatedDate(new Date(Record.DateOfBirth))}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>ID(Guardian Aadhaar)</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Record.UniqueID}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Mobile Number</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Record.MobileNumber}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Address</Text>
                        <Text style={{ fontSize: 12, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack, textAlign: 'right' }}>{Record.UniqueID}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Country</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{Record.Country}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Conducted by</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{HealthWorkerProfileData.FirstName} {HealthWorkerProfileData.LastName}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Date of Test</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>{formatedDate(new Date())}</Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Test Result</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#CF0A2C', fontFamily: FONTS.AvenirBlack }}>{result}</Text></View>

                    <SubmitPopup visible={visible}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 280 }}>
                            <Image source={icons.greenicon} style={{ width: 50, height: 50, marginTop: 50 }} />
                            <Text style={{ fontSize: 16, padding: 30, fontWeight: '400', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirBlack, }}>Test is successfully submitted.</Text>


                            <TouchableOpacity
                                onPress={() => navigation.navigate('Home') || setVisible(false)}
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

            </View>
            <CommonBottomButton
                onPress={submitUserDetails}
                children={'SUBMIT REPORT'} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 5, paddingBottom: 80
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
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red'
    }
});
