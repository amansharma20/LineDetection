import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import { SIZES, FONTS } from '../Constants/Index';
import { icons } from '../Constants/Index';
import * as yup from 'yup';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import { Formik } from 'formik';
import { AuthContext } from '../navigation/ApplicationNavigator';

const screenHeight = Dimensions.get('window').height;

const stylesCheckbox = {
  textStyle: { textDecorationLine: 'none', color: '#101E8E', marginRight: 40 },
};

const staticData = [
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

const HealthPopup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  //  const [visible, setVisible] = React.useState(false);
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


export default function RegisterScreen() {

  // const [countryValue, setCountryValue] = useState(null);

  // const [openCountry, setOpenCountry] = useState(null);

  // const [countryType, setCountryType] = useState([
  //   { label: 'India', value: 'india' },
  //   { label: 'Australia', value: 'australia' },
  //   { label: 'NewZealand', value: 'newzealand' },
  //   { label: 'Nigeria', value: 'nigeria' },
  //   { label: 'Bangladesh', value: 'bangladesh' },
  // ]);

  const [healthPopup, sethealthPopup] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(false);

  const navigation = useNavigation();

  const registerValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First name is required'),
    lastName: yup
      .string()
      .required('Last name is required'),
    mobile: yup
      .string()

      .required('Mobile number is required'),
    email: yup
      .string()

      .required('Email is required'),
    password: yup
      .string()

      .required('Password is required'),
    confirmPassword: yup
      .string()

      .required('Confirm Password is required'),
  });

  const { register } = useContext(AuthContext);

  const submitRegisterForm = (values) => {
    navigation.navigate('Registration', {
      formValues: values
    })
  }
  return (
    <View style={styles.MainContainer}>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={values => submitRegisterForm(values)}>
        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.header}>
                <Image source={images.logo} style={{ width: 150, height: 90, marginTop: 30 }} />
              </View>
              <View style={styles.body}>

                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Text style={{
                    fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', paddingTop: 10,
                    color: '#474747',
                  }}>Welcome</Text>
                </TouchableOpacity>
                <Text style={{
                  fontSize: 18, textAlign: 'center', justifyContent: 'center', opacity: 0.5, color: '#474747', paddingTop: 5, fontWeight: 'bold',
                  // fontFamily: FONTS.AvenirRoman 
                }}>Please enter your details</Text>
              </View>

              <View style={styles.inputs}>


                <View style={styles.inputs}>

                  <Text style={{ fontSize: 14, padding: 10, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Are you a trained health professional?</Text>
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <BouncyCheckboxGroup
                      data={staticData}
                      // onPress={() => setVisible(true)}
                      onChange={(selectedItem: ICheckboxButton,) => {
                        console.log('SelectedItem: ', JSON.stringify(selectedItem));
                        if (selectedItem.id === 1) {
                          sethealthPopup(true)
                          setDisableButton(true)
                        } else {
                          setDisableButton(false)
                        }
                      }}

                    />
                  </View>

                  <Text style={styles.textFieldLabel}>First Name*</Text>
                  <TextInput
                    name="firstName"
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    placeholderTextColor='#B4B4B4'
                    placeholder='Enter your first name'
                    value={values.firstName}
                    maxLength={20}
                  />

                  {errors.firstName && touched.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  )}

                  <Text style={styles.textFieldLabel}>Last Name</Text>
                  <TextInput
                    name="lastName"
                    style={styles.textInput}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    keyboardType='default'
                    placeholderTextColor='#B4B4B4'
                    placeholder='Enter your last name'
                    value={values.lastName}
                    maxLength={20} />
                  {errors.lastName && touched.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
                  )}

                  <Text style={styles.textFieldLabel}>Mobile Number</Text>
                  <TextInput
                    name="mobile"
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={handleChange('mobile')}
                    onBlur={handleBlur('mobile')}
                    placeholderTextColor='#B4B4B4'
                    keyboardType="numeric"
                    value={values.mobile}
                    placeholder='9876543210'
                    maxLength={10} />
                  {errors.mobile && touched.mobile && (
                    <Text style={styles.error}>{errors.mobile}</Text>
                  )}

                  <Text style={styles.textFieldLabel}>Email ID</Text>
                  <TextInput
                    name="email"
                    style={styles.textInput}
                    keyboardType='default'
                    placeholderTextColor='#B4B4B4'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder='example@example.com'
                    value={values.email} />
                  {errors.email && touched.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}


                  <Text style={styles.textFieldLabel}>Password</Text>
                  <TextInput
                    name="password"
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholderTextColor='#B4B4B4'
                    value={values.password}
                    secureTextEntry
                    placeholder='Please create your Password'
                    maxLength={20} />
                  {errors.password && touched.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}

                  <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Confirm Password</Text>
                  <TextInput
                    name='confirmPassword'
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    placeholderTextColor='#B4B4B4'
                    placeholder='Please confirm your Password'
                    value={values.confirmPassword}
                    secureTextEntry
                    maxLength={20} />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                  )}


                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 80,
                    }}
                    disabled={disableButton}
                  >

                    <View style={!disableButton ? styles.inputView : styles.disabledButton}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        CONTINUE
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
              <HealthPopup visible={healthPopup}>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white', elevation: 5, height: 320, width: 250 }}>
                  <Image source={icons.erroricon} style={{ width: 50, height: 50, marginTop: 30 }} />
                  <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman, paddingHorizontal: 40 }}>Only a trained health professional should perform this test.Please do not conduct the tests, if you have not received any training</Text>


                  <TouchableOpacity
                    onPress={() => sethealthPopup(false)}
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
                        OK
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </HealthPopup>
              {/* </View> */}
              <HealthPopup visible={healthPopup}>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                  <Image source={icons.erroricon} style={{ width: 50, height: 50, marginTop: 30 }} />
                  <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Only a trained health {'\n'}professional should perform this test.{'\n'}{'\n'} Please do not conduct the {'\n'} tests, if you have not received any training</Text>


                  <TouchableOpacity
                    onPress={() => sethealthPopup(false)}
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
                        OK
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </HealthPopup>
            </ScrollView>
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

  smalltextInput: {
    borderColor: '#989898',
    borderWidth: 1,
    backgroundColor: '#FBF9F9',
    color: '#101E8E',
    width: 130
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
  disabledButton: {
    width: '100%',
    borderRadius: 100,
    height: 55,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding2,
    marginTop: screenHeight / 6,
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop: 2,
  },
  textInput: {
    backgroundColor: '#FBF9F9',
    borderWidth: 1,
    borderColor: '#989898',
    color: '#101E8E',
    width: '100%',
    height: 40,
    paddingLeft: 10,
    marginTop: 2
  },
  inputs: {
    padding: 20
  },
  pickerContainer: {
    backgroundColor: '#FBF9F9',
    borderWidth: 0,
    marginTop: 10,
  },
  dropDownContainerStyle: {
    backgroundColor: 'white',
  },
  body: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  focus: {
    borderColor: '#101E8E'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    // padding: 20,
    backgroundColor: 'white',
    // paddingTop: 30
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
