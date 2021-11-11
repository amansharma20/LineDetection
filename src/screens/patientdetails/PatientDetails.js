import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, Dimensions, Image, StyleSheet, TextInput, ScrollView, Modal, Animated } from 'react-native';
import images from '../../Constants/Images';
import DatePicker from 'react-native-datepicker';
// import { format } from 'date-fns';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import { icons } from '../../Constants/Index';
import { SIZES, FONTS } from '../../Constants/Theme';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import * as yup from 'yup';
import { Formik } from 'formik';
import CommonBottomButton from '../../CommonBottomButton';
const screenHeight = Dimensions.get('window').height;

const stylesCheckbox = {
    textStyle: { textDecorationLine: 'none', color: '#101E8E', marginRight: 10 },
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

    const [relationshipValue, setRelationshipValue] = useState(null);

    const [visible, setVisible] = React.useState(false);

    const [openSelectRelationship, setOpenSelectRelationship] = useState(null);

    const [showAadharOptions, setShowAadharOptions] = useState(false);

    const [relationshipType, setRelationshipType] = useState([
        { label: 'Mother', value: 'mother' },
        { label: 'Father', value: 'father' },
        { label: 'Spouse', value: 'spouse' },
        { label: 'Sibling', value: 'sibling' },
        { label: 'Other', value: 'other' },
    ]);

    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);

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

    // const formatedDate = (date) => {
    //     var formattedDate = format(date, 'MMMM do, yyyy');
    //     // DATE
    //     // console.log(formattedDate);
    //     return formattedDate;
    // };


    const submitDetails = (value) => {
        console.log(value);
    }


    return (
        <View style={styles.MainContainer}>

            <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                        <View
                            style={styles.header}>

                            <Image source={icons.backarrow} style={{ width: 25, height: 25, }} />
                        </View></TouchableOpacity>
                    <Image source={images.headerlogo} style={{ width: 95, height: 53, }} />

                </View>

                <View style={{ backgroundColor: 'white', margin: 5, elevation: 5, padding: 10, paddingBottom: 80, flex: 1 }}>


                    <Text style={{
                        fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', paddingTop: 20
                        // fontFamily: FONTS.AvenirBlack
                    }}>
                        Enter Details(1/2)
                    </Text>
                    <View style={styles.inputs}>
                        <Text style={styles.textFieldLabel}>Full Name</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='default'
                            placeholderTextColor='#B4B4B4'
                            placeholder='Enter full name'
                            maxLength={20} />
                        <Text style={styles.textFieldLabel}>Date of Birth</Text>
                        <View >
                            <TouchableOpacity onPress={() => setShowModal(true)}>

                                <DatePicker
                                    date={date}
                                    onDateChange={setDate}
                                    mode="date"
                                    style={styles.datePicker}
                                />
                                {/* <Text style={styles.dobText}>{formatedDate(date)}</Text> */}

                            </TouchableOpacity></View>
                        <Text style={styles.textFieldLabel}>Mobile Number </Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='default'
                            placeholderTextColor='#B4B4B4'
                            placeholder='Enter mobile number'
                            maxLength={20} />

                        <Text style={styles.textFieldLabel}>Email ID </Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='default'
                            placeholderTextColor='#B4B4B4'
                            placeholder='Enter Email ID'
                            maxLength={20} />
                        <Text style={styles.textFieldLabel}>Gender</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <BouncyCheckboxGroup
                                data={staticData}
                                // onPress={() => setVisible(true)}
                                onChange={(selectedItem: ICheckboxButton,) => {
                                    console.log('SelectedItem: ', JSON.stringify(selectedItem));

                                }}

                            />
                        </View>
                        <Text style={{ fontSize: 14, padding: 10, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Aadhaar ID Available</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <BouncyCheckboxGroup
                                data={aadhaarcheckboxData}
                                // onPress={() => setVisible(true)}
                                onChange={(selectedItem: ICheckboxButton,) => {
                                    console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                    if (selectedItem.id === 0) {
                                        setShowAadharOptions(false)
                                    }
                                    else {
                                        setShowAadharOptions(!showAadharOptions)
                                    }


                                }}

                            />
                            {/* <BouncyCheckbox
                                size={18}
                                fillColor="#101E8E"
                                unfillColor="#FFFFFF"
                                text="Yes"
                                iconStyle={{ borderColor: "#101E8E" }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    // fontFamily: FONTS.AvenirRoman
                                }}
                                onPress={() => setShowAadharOptions(false)}
                            /> */}
                            {/* <BouncyCheckbox
                                size={18}
                                fillColor="#101E8E"
                                unfillColor="#FFFFFF"
                                text="No"
                                onPress={() => setShowAadharOptions(!showAadharOptions)}
                                iconStyle={{ borderColor: "#101E8E" }}
                                textStyle={{
                                    textDecorationLine: "none",
                                    // fontFamily: FONTS.AvenirRoman
                                }}
                                style={{ marginLeft: 30 }}
                            /> */}
                        </View>

                        {
                            showAadharOptions === false ?
                                <>
                                    <View>

                                        <Text style={styles.textFieldLabel}>Aadhaar  Number </Text>
                                        <TextInput
                                            style={styles.textInput}
                                            keyboardType='default'
                                            placeholderTextColor='#B4B4B4'
                                            placeholder='Enter  adhaar number'
                                            maxLength={20} />
                                    </View>

                                </>
                                :
                                <>
                                    <Text style={{ fontSize: 14, padding: 10, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Guardian's Aadhaar Available?</Text>
                                    <View style={{ flexDirection: 'row' }}>

                                        <BouncyCheckboxGroup
                                            data={IDPopupData}
                                            // onPress={() => setVisible(true)}
                                            onChange={(selectedItem: ICheckboxButton,) => {
                                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                                if (selectedItem.id === 1) {
                                                    setVisible(true)
                                                }
                                            }}

                                        />
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textFieldLabel}>Guardian Aadhaar No.</Text>
                                    </View>
                                    <TextInput
                                        style={styles.textInput}
                                        keyboardType='default'
                                        placeholderTextColor='#B4B4B4'
                                        placeholder='1234 5678 4321'
                                        maxLength={12} />
                                    <View>



                                        <Text style={styles.textFieldLabel}>Name of Guardian </Text>
                                        <TextInput
                                            style={styles.textInput}
                                            keyboardType='default'
                                            placeholderTextColor='#B4B4B4'
                                            placeholder='Full Name'
                                            maxLength={20} />
                                        <Text style={styles.textFieldLabel}>Select Relationship </Text>
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

                                </>

                        }

                    </View>
                </View>

                {/* <View style={{ justifyContent: 'center', paddingVertical: 20 }}>
                    <TouchableOpacity
                       onPress={() => navigation.navigate('AddressPage')}
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
                                    //  fontFamily: FONTS.AvenirBlack

                                }}>
                                Continue
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View> */}

                <IDPopup visible={visible}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 270, padding: 30 }}>
                        <Image source={icons.greenicon} style={{ width: 40, height: 40, }} />
                        <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#989898', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Your System ID is</Text>
                        <Text style={{ fontSize: 16, padding: 10, fontWeight: 'bold', textAlign: 'center', color: '#222D81', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>766789893738</Text>
                        <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Please note down the ID {'\n'}for future reference</Text>


                        <TouchableOpacity
                            onPress={() => setVisible(false)}
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

            </ScrollView>
            <CommonBottomButton
                onPress={() => navigation.navigate('AddressPage')}
                children={'CONTINUE'} />
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
    textFieldLabel: {
        fontSize: 14,
        padding: 10,
        paddingBottom: 0,
        paddingLeft: 0,
        // fontFamily: FONTS.AvenirRoman
    },
});