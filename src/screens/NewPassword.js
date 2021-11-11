import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import CustomInput from '../components/CustomInput';
import { SIZES, FONTS } from '../Constants/Index';
import { Formik, Field } from 'formik';

const PasswordPopup = ({ visible, children }) => {
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
export default function NewPassword() {
  
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

 

  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={images.logo} style={{ width: 150, height: 90 }} />
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'normal', paddingTop: 80, fontFamily: FONTS.AvenirBlack, color: '#474747' }}>New Password</Text>
          <Text style={{ fontSize: 18, textAlign: 'center', justifyContent: 'center', color: '#474747', opacity:0.5, paddingTop: 5, fontWeight: 'bold', fontFamily: FONTS.AvenirRoman }}>Please enter your new password</Text>
        </View>

        <View style={styles.inputs}>
          <Text style={{ fontSize: 14, paddingVertical: 50, paddingBottom: 0, fontWeight: '400', fontFamily: FONTS.AvenirRoman }}>Password</Text>
          <Formik
            // validationSchema={loginValidationSchema}
            initialValues={{
                Password: '',
             ConfirmPassword: '',
            }}
            onLogin={values => login(values)}>
            {({ handleLogin, handleBlur, errors, touched, handleChange, values, onFocus, onTextInput, onChange }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    name="Password"
                    style={styles.textInput}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    // value={values.username}
                    keyboardType="default"
                    placeholder="........."
                    placeholderTextColor="#B4B4B4"
                    maxLength={10}
                  />
                </View>
                <Text style={{ fontSize: 14, paddingVertical: 10, paddingBottom: 0, fontWeight: '400', fontFamily: FONTS.AvenirRoman }}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    name="Confirm Password"
                    style={styles.textInput}
                    keyboardType="default"
                    placeholder="........."
                    placeholderTextColor="#B4B4B4"
                    maxLength={10}
                  />
                </View>

                

                
               


                <TouchableOpacity onPress={() => setVisible(true)}
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
                      SAVE
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>

        </View>

        <PasswordPopup visible={visible}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 280 }}>
                            <Image source={icons.greenicon} style={{ width: 50, height: 50, marginTop: 30 }} />
                            <Text style={{ fontSize: 16, padding: 30, fontWeight: '400', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirRoman, justifyContent:'center',textAlign:'center' }}>New Password is updated</Text>


                            <TouchableOpacity
                               onPress={() => navigation.navigate('Login')}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 40
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 18,
                                            fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                        }}>
                                        LOGIN
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </PasswordPopup>
       
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
  }
});