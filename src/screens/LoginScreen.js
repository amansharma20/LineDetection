import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TextInput, Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { SIZES, FONTS } from '../Constants/Index';
import { useContext } from 'react';
import { Formik } from 'formik';
import CommonLoading from '../components/CommonLoading';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../persistance/actions/AuthActions';
import { AuthContext } from '../navigation/ApplicationNavigator';
import CommonBottomButton from '../CommonBottomButton';
const screenHeight = Dimensions.get('window').height;

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const login = data => {
    CommonLoading.show();
    const loginData = {
      Email: data.Username,
      Password: data.Password,
    };
    dispatch(AuthActions.login('Account/Login', loginData)).then(
      (response) => {
        CommonLoading.hide();
        if (response && response.success === false) { } else {
          let token = 'Bearer ' + response.data.data;
          signIn(token);
        }
      },
    );
  };

  return (
    <View style={styles.MainContainer}>
      <Formik
        initialValues={{
          Username: 'teena@webority.com',
          Password: '1234567',
        }}
        onSubmit={values => login(values)}>
        {({ handleSubmit, handleBlur, handleChange, values }) => (
          <>
            <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
              <View style={styles.header}>
                <Image source={images.logo} style={{ width: 150, height: 90 }} />
              </View>
              <View style={styles.body}>
                <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'normal', paddingTop: 80, fontFamily: FONTS.AvenirBlack, color: '#474747' }}>Welcome</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', justifyContent: 'center', color: '#474747', opacity: 0.5, paddingTop: 5, fontWeight: 'bold', fontFamily: FONTS.AvenirRoman }}>Please enter your details</Text>
              </View>

              <View style={styles.inputs}>
                <Text style={{ fontSize: 14, paddingVertical: 50, paddingBottom: 0, fontWeight: '400', fontFamily: FONTS.AvenirRoman }}>Email ID</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    name="Username"
                    style={styles.textInput}
                    onChangeText={handleChange('Username')}
                    onBlur={handleBlur('Username')}
                    value={values.Username}
                    keyboardType="default"
                    placeholder="Email"
                    placeholderTextColor="#B4B4B4"

                  />
                </View>


                <Text style={{ fontSize: 14, paddingTop: 10, paddingBottom: 0, fontWeight: '400', fontFamily: FONTS.AvenirRoman }}>Password</Text>
                <View style={styles.inputContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      name="Password"
                      style={styles.textInput}
                      onChangeText={handleChange('Password')}
                      onBlur={handleBlur('Password')}
                      value={values.Password}
                      keyboardType="default"
                      placeholder="Password"
                      placeholderTextColor="#B4B4B4"
                      maxLength={10}
                    />

                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <Text style={{ fontSize: 15, color: '#101E8E', textAlign: 'right', padding: 10, paddingRight: 0, fontWeight: '700', fontFamily: FONTS.AvenirBlack }}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 30,
                  }}>
                  <View style={styles.inputView}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: '700',
                        fontFamily: FONTS.AvenirBlack
                      }}>
                      LOGIN
                    </Text>
                  </View>
                </TouchableOpacity> */}



                {/* <View style={styles.inputView}>
                  <TouchableOpacity
                  // onPress={handleSubmit}
                  onPress={console.log("sjdjhs")}
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
                      LOGIN
                    </Text>
                    </View>
                  
                </TouchableOpacity>
                </View> */}

              </View>

            </ScrollView>
            <CommonBottomButton
              onPress={handleSubmit}
              children={'LOGIN'} />

          </>
        )}
      </Formik>
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
    backgroundColor: 'white',
  }
});