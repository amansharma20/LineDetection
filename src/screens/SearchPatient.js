import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { useLazyQuery, useQuery } from '@apollo/client';
import { SIZES, FONTS } from '../Constants/Theme';
import * as yup from 'yup';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import { GQLQuery } from '../persistance/query/GQLQuery';
import CommonHeader from '../components/CommonHeader';


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

    const [searchValue, setSearchValue] = useState(null);

    const [openSearch, setOpenSearch] = useState(null);

    const [searchType, setSearchType] = useState([
        { label: 'Self Aadhaar ID', value: 'SelfAadhaarID' },
        { label: 'Gaurdian Aadhaar ID', value: 'GaurdianAadhaarID' },
        { label: 'Unique ID', value: 'UniqueID' },
        { label: 'Mobile Number', value: 'MobileNumber' },
    ]);

    const [selectedSearch, setSelectedSearch] = useState();


    const searchPatientSchema = yup.object().shape({
        aadhaar: yup.string()
    });

    const [getRecords, { loading, error, data }] = useLazyQuery(GQLQuery.SEARCH_PATIENT_RECORD);
    if (loading) {
        return <Text>Loading</Text>
    }
    const submitSearch = (values) => {
        switch (selectedSearch) {
            case 'SelfAadhaarID':
                getRecords({
                    variables: {
                        AadharNumber: values.aadhaar,
                    }
                });
                break;
            case 'GaurdianAadhaarID':
                getRecords({
                    variables: {
                        GaurdianIDNumber: values.aadhaar,
                    }
                });
                break;
            case 'UniqueID':
                getRecords({
                    variables: {
                        UniqueID: values.aadhaar,
                    }
                });
                break;
            case 'MobileNumber':
                getRecords({
                    variables: {
                        MobileNumber: values.aadhaar,
                    }
                });
                break;
            default:
            // code block
        }
    }
    const PatientRecord = data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch;
    if (data && data.SearchPatientQuery && data.SearchPatientQuery.GetPatientBySearch) {
        navigation.navigate('SelectDatabase', {
            PatientRecord: PatientRecord
        })
    }

    return (
        <View style={styles.MainContainer}>
            <CommonHeader />
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                            Search Database
                        </Text>
                    </TouchableOpacity>
                    <Formik
                        validationSchema={searchPatientSchema}
                        initialValues={{
                            aadhaar: ''
                        }}
                        onSubmit={values => submitSearch(values)}>
                        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                            <>
                                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 20, elevation: 5, padding: 20, flex: 1, height: 380 }}>
                                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                                        Search
                                    </Text>
                                    <View style={styles.inputs}>
                                        <Text style={styles.textFieldLabel}>Search By</Text>
                                        <DropDownPicker
                                            open={openSearch}
                                            value={searchValue}
                                            items={searchType}
                                            setOpen={setOpenSearch}
                                            setValue={setSearchValue}
                                            setItems={setSearchType}
                                            zIndex={10000}
                                            zIndexInverse={1000}
                                            style={styles.pickerContainer}
                                            onChangeValue={(value) => {
                                                setSelectedSearch(value)
                                            }}
                                            listMode="FLATLIST"
                                            dropDownDirection='BOTTOM'
                                            dropDownContainerStyle={styles.dropDownContainerStyle}
                                            closeAfterSelecting={true}
                                        />
                                    </View>
                                    <TextInput
                                        name="aadhaar"
                                        onChangeText={handleChange('aadhaar')}
                                        onBlur={handleBlur('aadhaar')}
                                        value={values.aadhaar}
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholderTextColor='#B4B4B4'
                                    />

                                </View>
                                <View style={{ justifyContent: 'center', padding: 20, }}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        // onPress={() => navigation.navigate('SelectDatabase')}
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
            </View>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingLeft: 0,
        paddingRight: 0,
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
