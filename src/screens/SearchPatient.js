import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { useLazyQuery, useQuery } from '@apollo/client';
import { SIZES, FONTS } from '../Constants/Theme';
import * as yup from 'yup';
import { Formik } from 'formik';
import { GQLQuery } from '../persistance/query/GQLQuery';


const NoDataPopup = ({ visible, children }) => {
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

export default function SearchPatient() {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    const searchPatientSchema = yup.object().shape({
        name: yup
            .string(),
        aadhaar: yup.string().when("name", {
            is: value => value && value.length > 0,
            then: yup.string().required(
                "Aadhaar Number is required."
            ),
            otherwise: yup.string()
        }),
        systemId: yup.string().when("aadhaar", {
            is: value => value && value.length === 0,
            then: yup.string().required(
                "System Id is required."
            ),
            otherwise: yup.string()
        }),
    });

    const [getRecords, { loading, error, data }] = useLazyQuery(GQLQuery.SEARCH_PATIENT_RECORD);
    const submitSearch = (values) => {
        getRecords({
            variables: {
                AadharNumber: values.aadhaar,
                UniqueID: values.systemId,
            }
        });
    }

    const PatientRecord = data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch;
    if (data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch) {
        navigation.navigate('SearchResult', {
            PatientRecord: PatientRecord
        })
    }



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
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                        Search Database
                    </Text></TouchableOpacity>

                <Formik
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
                                    Search Patient
                                </Text>
                                <View style={styles.inputs}>
                                    <Text style={styles.textFieldLabel}>Full Name</Text>
                                    <TextInput
                                        name="name"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter full name'

                                    />
                                    {errors.name && touched.name && (
                                        <Text style={styles.error}>{errors.name}</Text>
                                    )}
                                    <Text style={styles.textFieldLabel}>Aadhaar Number </Text>
                                    <TextInput
                                        name="aadhaar"
                                        onChangeText={handleChange('aadhaar')}
                                        onBlur={handleBlur('aadhaar')}
                                        value={values.aadhaar}
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter Aadhaar number'
                                        maxLength={12} />

                                    {errors.aadhaar && touched.aadhaar && (
                                        <Text style={styles.error}>{errors.aadhaar}</Text>
                                    )}
                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman, textAlign: 'center', fontWeight: '400' }}> Or </Text>

                                    <Text style={styles.textFieldLabel}>System ID </Text>
                                    <TextInput
                                        name="systemId"
                                        onChangeText={handleChange('systemId')}
                                        onBlur={handleBlur('systemId')}
                                        value={values.systemId}
                                        style={styles.textInput}
                                        keyboardType='number-pad'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter system ID'
                                    />
                                    {errors.systemId && touched.systemId && (
                                        <Text style={styles.error}>{errors.systemId}</Text>
                                    )}

                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', paddingVertical: 20 }}>
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
                </Formik>
            </ScrollView>
            <NoDataPopup visible={visible}>
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
                                    fontWeight: 'bold',
                                    fontFamily: FONTS.AvenirBlack
                                }}>
                                TRY AGAIN
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </NoDataPopup>
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
        marginTop: 30,
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
        padding: 20,
        backgroundColor: 'white'
    }, textFieldLabel: {
        fontSize: 14,
        padding: 10,
        paddingBottom: 0,
        paddingLeft: 0,
        // fontFamily: FONTS.AvenirRoman
    }, error: {
        padding: 4,
        color: '#cc0000',
    },
});
