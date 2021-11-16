import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Clipboard from '@react-native-community/clipboard';
import { SIZES, FONTS } from '../Constants/Index';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../persistance/actions/AuthActions';

const screenHeight = Dimensions.get('window').height;
export default function OTPScreen(props) {

    console.log(props)

    const email = props.route.params.email

    const navigation = useNavigation();

    const dispatch = useDispatch();


    const [otp, setOtp] = useState();
    const submitOtp = () => {
        console.log(otp)
        // 

        const forgotData = {
            "Email": email,
            "Code": otp
          }
          dispatch(AuthActions.login('Account/ForgotPasswordVerify', forgotData)).then(((response) => {
            //navigation.navigate('NewPassword')
            console.log(response.data)
          }))
      
        
    }

    return (
        <View style={styles.MainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image source={images.logo} style={{ width: 150, height: 90 }} />
                </View>
                <View style={styles.body}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'normal', paddingTop: 80, fontFamily: FONTS.AvenirBlack, color: '#474747' }}>Enter OTP</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', justifyContent: 'center', color: '#474747', opacity: 0.5, paddingTop: 5, fontWeight: 'bold', fontFamily: FONTS.AvenirRoman, }}>Kindly enter the OTP sent to your{'\n'}Email Id</Text>
                    <OTPInputView
                        style={{
                            justifyContent: 'center', alignItems: 'center', padding: 30, paddingBottom: 0, paddingTop: 20

                        }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            setOtp(code)
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, paddingBottom: 0, paddingTop: 0, }}>
                        <Text style={{ fontSize: 14, textAlign: 'center', justifyContent: 'center', color: '#474747', opacity: 0.5, fontWeight: 'bold', fontFamily: FONTS.AvenirRoman, paddingRight: 60, paddingLeft: 0 }}>If OTP not recieved</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center', justifyContent: 'center', color: '#101E8E', fontWeight: 'bold', fontFamily: FONTS.AvenirRoman }}>Resend</Text>
                    </View>

                </View>
                <TouchableOpacity
                    onPress={() => submitOtp()}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 200,
                    }}>
                    <View style={styles.inputView}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                            }}>
                            VERIFY
                        </Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View >



    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 80
    },
    footer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    underlineStyleBase: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderWidth: 1,
        fontFamily: FONTS.AvenirRoman,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#101E8E'
    },

    underlineStyleHighLighted: {
        borderColor: "#989898",
    },
    inputView: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginBottom: 20,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding2,
        marginTop: screenHeight / 6,
        alignItems: 'center',
        backgroundColor: '#222D81',
        marginTop: 2,
    },
    textInput: {
        backgroundColor: '#FBF9F9',
        borderWidth: 1,
        color: '#101E8E',
        width: '100%',
        height: 40,
        paddingLeft: 5,
        marginTop: 5,
        borderColor: '#BDBDBD'
    },
    inputs: {
        padding: 20,
        paddingBottom: 0
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
    },
    focus: {
        borderColor: '#101E8E'
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    }
});