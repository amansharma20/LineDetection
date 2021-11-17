import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import CommonHeader from '../components/CommonHeader';
import { FONTS } from '../Constants/Theme';
import { GQLQuery } from '../persistance/query/GQLQuery';

export default function SearchResult(props) {

    const Record = props.route.params.PatientRecord;
    const navigation = useNavigation();
    const { data, error } = useQuery(GQLQuery.SEARCH_SICKLE_TEST_RECORD, {
        variables: {
            PatientId: Record.Id
        },
    });

    const formatedDate = (date) => {
        var formattedDate = format(date, 'd MMM yyyy');
        return formattedDate;
    };


    function showToast(title, message) {
        Toast.show({
            type: 'error',
            position: 'top',
            text1: title,
            text2: message,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    }

    function isRecordValid() {
        if (data && data.PatientTestReportQuery && data.PatientTestReportQuery.GetTestReportByPatientId == null) {
            return false
        }
        return true
    }

    const Test = data && data.PatientTestReportQuery && data.PatientTestReportQuery.GetTestReportByPatientId;


    return (
        <View style={styles.MainContainer}>
            <CommonHeader />
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 20, fontFamily: FONTS.AvenirBlack }}>
                    Details
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>Full Name</Text>
                    <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>{Record.FullName}</Text></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>Date of Birth</Text>
                    <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>{formatedDate(new Date(Record.DateOfBirth))}</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 40, paddingTop: 0, paddingBottom: 0 }}>
                    <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirRoman }}>Unique ID</Text>
                    <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirRoman }}>{Record.UniqueID}</Text></View>
                <View style={{
                    backgroundColor: 'white', marginHorizontal: 40, marginVertical: 30, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,

                }}>
                    <TouchableOpacity
                        onPress={() => isRecordValid() ? showToast('Test Report Available', 'View Report') : navigation.navigate('Criteria', {
                            Record: Record
                        })}
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
                    backgroundColor: 'white', marginHorizontal: 40, marginVertical: 30, elevation: 5, padding: 40, borderBottomColor: '#CF0A2C',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderWidth: 5,
                }}>

                    <TouchableOpacity
                        onPress={() => {
                            isRecordValid() ?
                                navigation.navigate('Report', {
                                    report: Test
                                }) :
                                showToast('Test Required', 'Please Conduct Test.')
                        }}
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
