import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View, Platform, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FONTS } from '../../Constants/Theme';
import CommonBottomButton from '../../CommonBottomButton';
import { icons } from '../../Constants/Index';
import CommonHeader from '../../components/CommonHeader';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { GQLMutation } from '../../persistance/mutation/Mutation';

export default function AddressDetails(props) {

    const previousDetails = props.route.params.previousDetails;
    const navigation = useNavigation();

    const [visible, setVisible] = React.useState(false);
    const [stateValue, setStateValue] = useState(null);
    const [openState, setOpenState] = useState(null);


    const [stateType, setStateType] = useState([
        { label: 'Haryana', value: 'haryana' },
        { label: 'Punjab', value: 'punjab' },
        { label: 'Delhi', value: 'delhi' },
        { label: 'Maharashtra', value: 'maharashtra' },
        { label: 'Madhya Pradesh', value: 'madhya Pradesh' },
        { label: 'Sikkim', value: 'sikkim' },
    ]);

    const IDPopup = ({ visible, children }) => {
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

    const [addDetailsMutation, { data: userSickle, error: userError, loading }] = useMutation(GQLMutation.ADD_PATIENT_DETAILS);
   
    const submitUserDetails = (values) => {
        addDetailsMutation({
            variables: {
                FullName: previousDetails.basicDetails.fullName,
                DateOfBirth: previousDetails.dob,
                MobileNumber: previousDetails.basicDetails.mobile,
                Email: previousDetails.basicDetails.email,
                Gender: previousDetails.gender,
                AadharAvailable: previousDetails.isAadhaar,
                AadharNumber: previousDetails.basicDetails.aadhaar,
                GuardianName: previousDetails.basicDetails.guardianName,
                GuardianRelationship: previousDetails.relationship,
                GuardianIDAvailable: previousDetails.isGuardianAadhaar,
                GuardianIDNumber: previousDetails.basicDetails.guardianAadhaar,
                CareOf: values.careOf,
                HouseNumber: values.hNo,
                Street: values.street,
                Area: values.area,
                PostOffice: values.po,
                District: values.district,
                State: stateValue,
                PinCode: values.pincode,
                Country: values.country,
                City: values.city,
            }
        });

    }

    useEffect(() => {
        if (!loading && userSickle) {
            setVisible(true);

        }
    }, [loading, userSickle])

    const Details = userSickle && userSickle.AddPatientMutation && userSickle.AddPatientMutation.AddPatientDetail

    return (
        <View style={styles.MainContainer}>
            <Formik
                initialValues={{
                    careOf: '',
                    hNo: '',
                    street: '',
                    area: '',
                    city: '',
                    po: '',
                    district: '',
                    pincode: '',
                    country: '',
                }}
                onSubmit={values => submitUserDetails(values)}>
                {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                    <>
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                            <IDPopup visible={visible}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 270, padding: 30 }}>
                                    <Image source={icons.greenicon} style={{ width: 40, height: 40, }} />
                                    <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#989898', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Your Unique ID is</Text>
                                    <Text style={{ fontSize: 16, padding: 10, fontWeight: 'bold', textAlign: 'center', color: '#222D81', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>{Details && Details.UniqueID}</Text>
                                    <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Please note down the ID{'\n'}for future reference</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Criteria');
                                            setVisible(false);
                                        }}
                                        style={{ flex: 1 }}>
                                        <View style={{
                                            backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                            justifyContent: 'center', marginTop: 20
                                        }}>
                                            <Text
                                                style={{
                                                    color: '#ffffff',
                                                    fontSize: 14,
                                                    fontWeight: 'bold', fontFamily: FONTS.AvenirBlack
                                                }}>
                                                CONTINUE
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </IDPopup>

                            <CommonHeader />
                            <View style={{ backgroundColor: 'white', margin: 5, elevation: 5, padding: 20, flex: 1, paddingBottom: 50 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                                    Enter Details(2/2)
                                </Text>
                                <View style={styles.inputs}>
                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Care Of</Text>
                                    <TextInput
                                        name="careOf"
                                        onChangeText={handleChange('careOf')}
                                        onBlur={handleBlur('careOf')}
                                        value={values.careOf}
                                        style={styles.textInput}
                                        placeholder='12/55'
                                        maxLength={50} />
                                    {errors.careOf && touched.careOf && (
                                        <Text style={styles.error}>{errors.careOf}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>House Number</Text>
                                    <TextInput
                                        name="hNo"
                                        onChangeText={handleChange('hNo')}
                                        onBlur={handleBlur('hNo')}
                                        value={values.hNo}
                                        style={styles.textInput}
                                        placeholder=''
                                        maxLength={50} />
                                    {errors.hNo && touched.hNo && (
                                        <Text style={styles.error}>{errors.hNo}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Street</Text>
                                    <TextInput
                                        name="street"
                                        onChangeText={handleChange('street')}
                                        onBlur={handleBlur('street')}
                                        value={values.street}
                                        style={styles.textInput}
                                        placeholder=''
                                        maxLength={100} />
                                    {errors.street && touched.street && (
                                        <Text style={styles.error}>{errors.street}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Area</Text>
                                    <TextInput
                                        name="area"
                                        onChangeText={handleChange('area')}
                                        onBlur={handleBlur('area')}
                                        value={values.area}
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholder=''
                                        maxLength={100} />
                                    {errors.area && touched.area && (
                                        <Text style={styles.error}>{errors.area}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>City</Text>
                                    <TextInput
                                        name="city"
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                        style={styles.textInput}
                                        placeholder=''
                                        maxLength={100} />
                                    {errors.city && touched.city && (
                                        <Text style={styles.error}>{errors.city}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>P.O.</Text>
                                    <TextInput
                                        name="po"
                                        onChangeText={handleChange('po')}
                                        onBlur={handleBlur('po')}
                                        value={values.po}
                                        style={styles.textInput}
                                        placeholder=''
                                        maxLength={100} />
                                    {errors.po && touched.po && (
                                        <Text style={styles.error}>{errors.po}</Text>
                                    )}

                                    <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>District</Text>
                                    <TextInput
                                        name="district"
                                        onChangeText={handleChange('district')}
                                        onBlur={handleBlur('district')}
                                        value={values.district}
                                        style={styles.textInput}
                                        placeholder=''
                                        maxLength={100} />
                                    {errors.po && touched.po && (
                                        <Text style={styles.error}>{errors.po}</Text>
                                    )}

                                    <View style={{ padding: 0 }}>
                                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>State</Text>
                                        <DropDownPicker
                                            name="state"
                                            onChangeText={handleChange('state')}
                                            onBlur={handleBlur('state')}
                                            value={stateValue}
                                            open={openState}
                                            items={stateType}
                                            setOpen={setOpenState}
                                            setValue={setStateValue}
                                            setItems={setStateType}
                                            zIndex={10000}
                                            zIndexInverse={1000}
                                            placeholder="Select State"
                                            style={styles.pickerContainer}
                                            dropDownDirection="TOP"
                                            listMode="FLATLIST"
                                            dropDownContainerStyle={styles.dropDownContainerStyle}
                                            closeAfterSelecting={true}
                                            textStyle={{
                                                fontFamily: Platform.select({
                                                    ios: 'FONTS.AvenirRoman',
                                                    android: 'FONTS.AvenirRoman',
                                                }),
                                            }}
                                        />
                                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Pin Code</Text>
                                        <TextInput
                                            name="pincode"
                                            onChangeText={handleChange('pincode')}
                                            onBlur={handleBlur('pincode')}
                                            value={values.pincode}
                                            style={styles.textInput}
                                            placeholder=''
                                            maxLength={10} />

                                        <Text style={styles.textFieldLabel}>Country</Text>
                                        <TextInput
                                            name="country"
                                            onChangeText={handleChange('country')}
                                            onBlur={handleBlur('country')}
                                            value={values.country}
                                            style={styles.textInput}
                                            placeholder=''
                                            maxLength={100} />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <CommonBottomButton
                            onPress={handleSubmit}
                            children={'CONTINUE'} />
                    </>
                )}
            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row',
        padding: 20, paddingLeft: 0, paddingRight: 0, justifyContent: 'space-between'
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
    textInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
        paddingHorizontal: 16,
        height: 40
    },
    smalltextInput: {
        borderColor: '#989898',
        borderWidth: 1,
        backgroundColor: '#FBF9F9',
        color: '#101E8E',
        width: 125
    },
    inputs: {
        height: '47%',
    },
    pickerContainer: {
        backgroundColor: '#FBF9F9',
        borderWidth: 1,
        borderRadius: 0,
        height: 42,
        borderColor: '#989898'
    },
    dropDownContainerStyle: {
        backgroundColor: 'white',
        borderColor: '#989898',
        borderWidth: 1,
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
        flex: 1,
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
    }
});
