import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, Dimensions, Image, StyleSheet, TextInput, ScrollView, Modal, Animated } from 'react-native';
import images from '../../Constants/Images';
import DropDownPicker from 'react-native-dropdown-picker';
import { icons } from '../../Constants/Index';
import { SIZES, FONTS } from '../../Constants/Theme';
import CommonBottomButton from '../../CommonBottomButton';


const screenHeight = Dimensions.get('window').height;
export default function AddressDetails() {

    const navigation = useNavigation();



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

    return (
        <View style={styles.MainContainer}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
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

                <View style={{ backgroundColor: 'white', margin: 5, elevation: 5, padding: 20, flex: 1, paddingBottom: 50 }}>


                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                        Enter Details(2/2)
                    </Text>

                    <View style={styles.inputs}>
                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>C/O</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='12/55'
                            maxLength={20} />

                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>House/Bldg/Apt</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            maxLength={20} />

                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Street/Road/Lane</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            maxLength={20} />



                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Area/Locality/Sector</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='default'
                            placeholder=''
                            maxLength={20} />

                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Village/Town/City</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            maxLength={20} />

                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>P.O.</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            maxLength={20} />

                        <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>District</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            maxLength={20} />

                        <View style={{ padding: 0 }}>
                            <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>State</Text>
                            <DropDownPicker
                                open={openState}
                                value={stateValue}
                                items={stateType}
                                setOpen={setOpenState}
                                setValue={setStateValue}
                                setItems={setStateType}
                                zIndex={10000}
                                zIndexInverse={1000}
                                placeholder="Select State"
                                style={styles.pickerContainer}

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
                            <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>PinCode</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=''
                                maxLength={20} />
                        </View>
                    </View>
                </View>

                {/* <View style={{ justifyContent: 'center', paddingVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Criteria')}
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
                                    // fontFamily: FONTS.AvenirBlack

                                }}>
                                Continue
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
            <CommonBottomButton
                onPress={() => navigation.navigate('Criteria')}
                children={'CONTINUE'} />


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
        borderWidth: 0,
        marginTop: 10,
    },
    dropDownContainerStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
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
});
