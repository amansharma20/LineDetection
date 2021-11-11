import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TextInput, Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { SIZES, FONTS } from '../Constants/Index';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../persistance/actions/AuthActions';
const screenHeight = Dimensions.get('window').height;

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('This field is' + ' ' + 'required.')
  });


  const sendOTP = (values) => {
    const forgotData = {
      "Email": values.email
    }
    dispatch(AuthActions.login('Account/ForgotPasswordStart', forgotData)).then((() => {
      navigation.navigate('OTPScreen',{
        email: values.email
      })
    }))

  }

  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={images.logo} style={{ width: 150, height: 90 }} />
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'normal', paddingTop: 80, fontFamily: FONTS.AvenirBlack, color: '#474747' }}>Reset Password</Text>
          <Text style={{ fontSize: 14, textAlign: 'center', justifyContent: 'center', color: '#474747', opacity: 0.5, paddingTop: 5, fontWeight: 'bold', fontFamily: FONTS.AvenirRoman }}>Enter the email associated with your account and we'll send an email with OTP{'\n'}
            to reset your password</Text>
        </View>

        <View style={styles.inputs}>
          <Text style={{ fontSize: 14, paddingVertical: 40, paddingBottom: 0, fontWeight: '400', fontFamily: FONTS.AvenirRoman }}>Email ID</Text>
          <Formik
            validationSchema={schema}
            initialValues={{
              email: '',
            }}
            onSubmit={values => sendOTP(values)}>
            {({ handleSubmit, handleBlur, errors, touched, handleChange, values }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    name="email"
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="default"
                    placeholder="example@example.com"
                    placeholderTextColor="#B4B4B4"
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
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
                      SEND OTP
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>

        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  footer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
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
    padding: 20
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
  },
  error: {
    padding: 4,
    color: '#cc0000',
  },
});