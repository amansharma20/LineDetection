import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, FlatList, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { useLazyQuery, useQuery } from '@apollo/client';
import { SIZES, FONTS } from '../Constants/Theme';
import * as yup from 'yup';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import { GQLQuery } from '../persistance/query/GQLQuery';
import CommonHeader from '../components/CommonHeader';



const screenHeight = Dimensions.get('window').height;

export default function SelectDatabase() {


    const navigation = useNavigation();





    const [getRecords, { loading, error, data }] = useLazyQuery(GQLQuery.SEARCH_PATIENT_RECORD);
    const submitSearch = (values) => {
        getRecords({
            variables: {
                AadharNumber: values.aadhaar,
                UniqueId: values.systemId,
            }

        });



        const PatientRecord = data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch;
        if (data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch) {
            navigation.navigate('SearchResult', {
                PatientRecord: PatientRecord
            })
        }

    }
    console.log(data);
    console.log(error);
    console.log('data');

    return (
        <View style={styles.MainContainer}>
            <CommonHeader />

            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                            Search Database
                        </Text></TouchableOpacity>

                    {/* <Formik
                        validationSchema={searchPatientSchema}
                        initialValues={{
                            name: '',
                            aadhaar: '',
                            systemId: '',
                        }}
                        onSubmit={values => submitSearch(values)}>
                {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                    <>
                    <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 20, elevation: 5, padding: 20, flex: 1, height: 380 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                    Select
                    </Text>
                    <View>
                    <FlatList
                    data={activities}
                    renderItem={renderAvailableActivitiesItem}
                    keyExtractor={item => item.id}
                    horizontal
                    contentContainerStyle={{
                }}
                    />



                    </View>
                    <View style={{ justifyContent: 'center', padding: 20, }}>
                    <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={styles.buttonContainer}>
                    <Text
                    style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: FONTS.AvenirBlack
                }}>
                    SEARCH
                    </Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                    </>
                )}
                    </Formik> */}
                </ScrollView>
            </View>




        </View>
    );
}



const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 0, paddingRight: 0,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropDownContainerStyle: {
        backgroundColor: 'white',
    },
    pickerContainer: {
        backgroundColor: '#FBF9F9',
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 0,
        height: 40,
        marginTop: 10,
    },
    modalContainer: {
        width: 20,
        height: 30,
        backgroundColor: 'green',
        elevation: 20,
    },
    textInput: {
        backgroundColor: '#FBF9F9',
        borderWidth: 1,
        color: '#101E8E',
        width: '100%',
        height: 40,
        paddingLeft: 10,
        borderColor: '#989898',
        marginTop: 2
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        // padding: 20,
        backgroundColor: 'white'
    },
    textFieldLabel: {
        fontSize: 14,
        padding: 10,
        paddingBottom: 0,
        paddingLeft: 0,
        // fontFamily: FONTS.AvenirRoman
    },
    error: {
        padding: 4,
        color: '#cc0000',
    },
});
