import { useNavigation } from '@react-navigation/core';
import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Platform, Image, StyleSheet, TextInput, ScrollView, Modal, Animated } from 'react-native';
import DatePicker from 'react-native-datepicker';
// import { format } from 'date-fns';
import DropDownPicker from 'react-native-dropdown-picker';

import { SIZES, FONTS } from '../../Constants/Theme';
import PhoneInput from 'react-native-phone-number-input';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import * as yup from 'yup';
import { Formik } from 'formik';
import CommonHeader from '../../components/CommonHeader';

const stylesCheckbox = {
    textStyle: { textDecorationLine: 'none', color: '#000000', marginRight: 10 },
};

const staticData = [
    {
        id: 0,
        fillColor: '#101E8E',
        text: 'Male',
        textStyle: stylesCheckbox.textStyle,

    },
    {
        id: 1,
        fillColor: '#101E8E',
        text: 'Female',
        textStyle: stylesCheckbox.textStyle,
    },
    {
        id: 2,
        fillColor: '#101E8E',
        text: 'Other',
        textStyle: stylesCheckbox.textStyle,
    },
];

const aadhaarcheckboxData = [
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

const IDPopupData = [
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

export default function PatientDetails() {

    const navigation = useNavigation();
    const [relationshipValue, setRelationshipValue] = useState('none');

    const [openSelectRelationship, setOpenSelectRelationship] = useState(null);
    const [showAadharOptions, setShowAadharOptions] = useState(false);

    const [gender, setGender] = useState();

    const [isGuardianAadhaar, setIsGuardianAadhaar] = useState(false);

    const [relationshipType, setRelationshipType] = useState([
        { label: 'Mother', value: 'mother' },
        { label: 'Father', value: 'father' },
        { label: 'Spouse', value: 'spouse' },
        { label: 'Brother/Sister', value: 'brothersister' },
        { label: 'Other', value: 'other' },
        { label: 'None', value: 'none' },
    ]);

    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const emailRegExp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const [, setShowModal] = useState(false);

    const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };



    // const formatedDate = (date) => {
    //     var formattedDate = format(date, 'MMMM do, yyyy');
    //     // DATE
    //     // console.log(formattedDate);
    //     return formattedDate;
    // };

    const submitDetails = (value) => {
        navigation.navigate('AddressPage', {
            previousDetails: {
                basicDetails: value,
                dob: dateOfBirth,
                relationship: relationshipValue,
                gender: gender,
                isAadhaar: showAadharOptions,
                isGuardianAadhaar: isGuardianAadhaar
            }
        })
    }

    return (
        <View style={styles.MainContainer}>
            <CommonHeader />
            <Formik
                initialValues={{
                    fullName: '',
                    mobile: '',
                    email: '',
                    aadhaar: '',
                    guardianName: '',
                    guardianAadhaar: '',
                }}
                onSubmit={values => submitDetails(values)}>
                {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                    <>
                        <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: 'white', margin: 5, elevation: 5, padding: 10, paddingBottom: 20, flex: 1, }}>
                                <Text style={{
                                    fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', paddingTop: 20
                                    // fontFamily: FONTS.AvenirBlack
                                }}>
                                    Enter Details (1/2)
                                </Text>

                                <View style={styles.inputs}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textFieldLabel}>Full Name</Text>
                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                    <TextInput
                                        name="fullName"
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        value={values.fullName}
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter full name'
                                        maxLength={70} />
                                    {errors.fullName && touched.fullName && (
                                        <Text style={styles.error}>{errors.fullName}</Text>
                                    )}
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textFieldLabel}>Date of Birth</Text>
                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                    <View>
                                        <TouchableOpacity onPress={() => setShowModal(true)}>
                                            <DatePicker
                                                date={dateOfBirth}
                                                onDateChange={setDateOfBirth}
                                                mode="date"
                                                style={styles.datePicker}
                                            />
                                        </TouchableOpacity></View>
                                    <Text style={styles.textFieldLabel}>Mobile Number</Text>

                                    <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    autoFocus
                   containerStyle={styles.phoneContainer}
                      value={values.mobile}
                     textContainerStyle={styles.phonetextInput}
                     onChangeText={handleChange('mobile')}
                     onBlur={handleBlur('mobile')}
                     placeholderTextColor='#B4B4B4'
                     keyboardType="numeric"
                    onChangeFormattedText={text => {
                      setphoneNumber(text);
                    }}
                  />
                                    {/* <TextInput
                                        name="mobile"
                                        onChangeText={handleChange('mobile')}
                                        onBlur={handleBlur('mobile')}
                                        value={values.mobile}
                                        style={styles.textInput}
                                        keyboardType='phone-pad'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter mobile number'
                                        maxLength={12} /> */}

                                    {errors.mobile && touched.mobile && (
                                        <Text style={styles.error}>{errors.mobile}</Text>
                                    )}

                                    <Text style={styles.textFieldLabel}>Email ID </Text>
                                    <TextInput
                                        name="email"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        style={styles.textInput}
                                        keyboardType='email-address'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='Enter Email ID' />
                                    {errors.email && touched.email && (
                                        <Text style={styles.error}>{errors.email}</Text>
                                    )}
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textFieldLabel}>Gender</Text>
                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                        <BouncyCheckboxGroup
                                            data={staticData}
                                            // onPress={() => setVisible(true)}
                                            onChange={(selectedItem: ICheckboxButton,) => {
                                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                                setGender(selectedItem.text)
                                            }}

                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 14, padding: 10, paddingLeft: 0, paddingRight: 0, fontFamily: FONTS.AvenirRoman }}>Aadhaar ID Available</Text>
                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <BouncyCheckboxGroup
                                            data={aadhaarcheckboxData}
                                            // onPress={() => setVisible(true)}
                                            onChange={(selectedItem: ICheckboxButton,) => {
                                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                                if (selectedItem.id === 0) {
                                                    setShowAadharOptions(false)
                                                } else if (selectedItem.id === 1) {
                                                    setShowAadharOptions(true)
                                                }
                                            }}
                                        />
                                    </View>

                                    {
                                        showAadharOptions === false ?
                                            <>
                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.textFieldLabel}>Aadhaar Number </Text>
                                                        <Text style={styles.textsymbolLabel}>*</Text>
                                                    </View>
                                                    <TextInput
                                                        name="aadhaar"
                                                        onChangeText={handleChange('aadhaar')}
                                                        onBlur={handleBlur('aadhaar')}
                                                        value={values.aadhaar}
                                                        style={styles.textInput}
                                                        keyboardType='default'
                                                        placeholderTextColor='#B4B4B4'
                                                        placeholder='Enter aadhaar number'
                                                        maxLength={12} />
                                                    {errors.aadhaar && touched.aadhaar && (
                                                        <Text style={styles.error}>{errors.aadhaar}</Text>
                                                    )}

                                                </View>
                                            </>
                                            :
                                            <>
                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.textFieldLabel}>Name of Guardian</Text>
                                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                                    <TextInput
                                                        name="guardianName"
                                                        onChangeText={handleChange('guardianName')}
                                                        onBlur={handleBlur('guardianName')}
                                                        value={values.guardianName}
                                                        style={styles.textInput}
                                                        keyboardType='default'
                                                        placeholderTextColor='#B4B4B4'
                                                        placeholder='Full Name'
                                                        maxLength={50} />

                                                    {errors.guardianName && touched.guardianName && (
                                                        <Text style={styles.error}>{errors.guardianName}</Text>
                                                    )}
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.textFieldLabel}>Select Relationship</Text>
                                                        <Text style={styles.textsymbolLabel}>*</Text></View>
                                                    <DropDownPicker
                                                        open={openSelectRelationship}
                                                        value={relationshipValue}
                                                        items={relationshipType}
                                                        setOpen={setOpenSelectRelationship}
                                                        setValue={setRelationshipValue}
                                                        setItems={setRelationshipType}
                                                        zIndex={10000}
                                                        zIndexInverse={1000}
                                                        placeholder="Select Relationship"
                                                        style={styles.pickerContainer}
                                                        listMode="FLATLIST"
                                                        dropDownContainerStyle={styles.dropDownContainerStyle}
                                                        closeAfterSelecting={true}
                                                        textStyle={{
                                                            fontFamily: Platform.select({
                                                                ios: ' FONTS.AvenirRoman',
                                                                android: ' FONTS.AvenirRoman',
                                                            }),
                                                        }}
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 14, padding: 10, paddingLeft: 0, paddingRight: 0, fontFamily: FONTS.AvenirRoman }}>Guardian's Aadhaar ID Available?</Text>
                                                    <Text style={styles.textsymbolLabel}>*</Text></View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <BouncyCheckboxGroup
                                                        data={IDPopupData}
                                                        //onPress={() => setVisible(true)}
                                                        onChange={(selectedItem: ICheckboxButton,) => {
                                                            console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                                            if (selectedItem.id === 1) {
                                                                setIsGuardianAadhaar(false)
                                                            } else if (selectedItem.id === 0) {
                                                                setIsGuardianAadhaar(true)
                                                            }
                                                        }}
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.textFieldLabel}>Guardian Aadhaar No. / Other ID</Text>
                                                    <Text style={styles.textsymbolLabel}>*</Text>
                                                </View>
                                                <TextInput
                                                    name="guardianAadhaar"
                                                    onChangeText={handleChange('guardianAadhaar')}
                                                    onBlur={handleBlur('guardianAadhaar')}
                                                    value={values.guardianAadhaar}
                                                    style={styles.textInput}
                                                    keyboardType='default'
                                                    placeholderTextColor='#B4B4B4'
                                                    placeholder='1234 5678 4321'
                                                    maxLength={50} />
                                                {errors.guardianAadhaar && touched.guardianAadhaar && (
                                                    <Text style={styles.error}>{errors.guardianAadhaar}</Text>
                                                )}
                                            </>
                                    }
                                </View>
                            </View>
                        </ScrollView>
                        <View style={{ paddingBottom: 20, paddingHorizontal: 20 }}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                activeOpacity={0.9}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 8
                                }}>
                                <View style={styles.buttonContainer}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            //fontFamily: FONTS.AvenirBlack
                                        }}>
                                        CONTINUE
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>

        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', paddingBottom: 40, padding: 5, justifyContent: 'center', paddingRight: 100
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
    datePicker: {
        backgroundColor: '#FBF9F9',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    phoneContainer: {
        backgroundColor: '#FBF9F9',
      },
      phonetextInput: {
        backgroundColor: '#FBF9F9',
   
     },
    dobText: {
        marginLeft: 10,
        color: '#B4B4B4',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Fonts.AvenirRoman',
            android: 'Fonts.AvenirRoman',
        }),
    },
    textInput: {
        backgroundColor: '#FBF9F9',
        borderWidth: 1,
        color: '#101E8E',
        width: '100%',
        height: 40,
        paddingLeft: 10,
        borderColor: '#BDBDBD',
        marginTop: 2
    },
    inputs: {
        height: '47%',
    },
    pickerContainer: {
        backgroundColor: '#FBF9F9',
        borderWidth: 0,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 0,
        height: 40
    },
    dropDownContainerStyle: {
        backgroundColor: 'white',
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.select({
            ios: 30,
            android: 0
        }),
    },
    textsymbolLabel: {
        color: 'red',
        textAlign: 'left',
        padding: 0,
        paddingTop: 10,
        paddingRight: 5,
    },
    textFieldLabel: {
        fontSize: 14,
        padding: 10,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        // fontFamily: FONTS.AvenirRoman
    }, error: {
        padding: 4,
        color: '#cc0000',
    }
});