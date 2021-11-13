import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { SIZES, FONTS } from '../Constants/Index';
import * as yup from 'yup';
import { Formik } from 'formik';
import { AuthContext } from '../navigation/ApplicationNavigator';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../persistance/actions/AuthActions';
import DropDownPicker from 'react-native-dropdown-picker';
import CommonLoading from '../components/CommonLoading';
const screenHeight = Dimensions.get('window').height;

export default function RegistrationScreen(props) {

  const registerationData = props.route.params.formValues;
  const { singUp } = useContext(AuthContext);

  const dispatch = useDispatch();

  const [countryValue, setCountryValue] = useState(null);

  const [openCountry, setOpenCountry] = useState(null);

  const [countryType, setCountryType] = useState([
    { label: 'India', value: 'IN' },
    { label: 'Australia', value: 'AUS' },
    { label: 'NewZealand', value: 'NZ' },
    { label: 'Nigeria', value: 'nigeria' },
    { label: 'Bangladesh', value: 'BG' },
  ]);

  const registerValidationSchema = yup.object().shape({
    organization: yup
      .string()
      .required('Organization is required'),
    department: yup
      .string()
      .required('Department is required'),
    address: yup
      .string()
      .required('Address is required'),
    city: yup
      .string()
      .required('City is required'),
    state: yup
      .string()
      .required('State is required'),
    pinCode: yup
      .string()
      .required('PinCode is required'),
  });


  const [selectedCountry, setSelectedCountry] = useState();

  const submitSignUpData = (values) => {
    CommonLoading.show();
    const formData =
    {
      "FirstName": registerationData.firstName,
      "LastName": registerationData.lastName,
      "Organization": values.organization,
      "Department": values.department,
      "Country": selectedCountry,
      "Address": values.address,
      "City": values.city,
      "State": values.state,
      "Pincode": values.pinCode,
      "PhoneNumber": registerationData.mobile,
      "Email": registerationData.email,
      "Password": registerationData.password,
    };

    console.log(formData)
    dispatch(AuthActions.register('Account/Register', formData)).then((response) => {
      CommonLoading.hide();
      if (response && response.success === false) { } else {
        let token = 'Bearer ' + response.data.data;
        singUp(token);
      }
    })

  }


  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={images.logo} style={{ width: 150, height: 90 }} />
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'normal', paddingTop: 20, fontFamily: FONTS.AvenirBlack, color: '#474747' }}>Welcome</Text>
          <Text style={{ fontSize: 18, textAlign: 'center', justifyContent: 'center', color: '#474747', paddingTop: 5, fontWeight: 'bold', opacity: 0.5, fontFamily: FONTS.AvenirRoman }}>Please enter your details</Text>
        </View>

        <View style={styles.inputs}>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              organization: '',
              department: '',
              address: '',
              city: '',
              state: '',
              pinCode: '',
            }}
            onSubmit={values => submitSignUpData(values)}>
            {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
              <>
                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Organization</Text>
                <TextInput
                  name="organization"
                  style={styles.textInput}
                  keyboardType='default'
                  onChangeText={handleChange('organization')}
                  onBlur={handleBlur('organization')}
                  placeholderTextColor='#B4B4B4'
                  placeholder=''
                  value={values.organization}
                  maxLength={20} />

                {errors.organization && touched.organization && (
                  <Text style={styles.error}>{errors.organization}</Text>
                )}

                <Text style={styles.textFieldLabel}>Department</Text>
                <TextInput
                  name="department"
                  style={styles.textInput}
                  keyboardType='default'
                  placeholderTextColor='#B4B4B4'
                  onChangeText={handleChange('department')}
                  onBlur={handleBlur('department')}
                  value={values.department}
                  placeholder=''
                  maxLength={20} />

                {errors.department && touched.department && (
                  <Text style={styles.error}>{errors.department}</Text>
                )}

                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Country</Text>
                <DropDownPicker
                  open={openCountry}
                  value={countryValue}
                  items={countryType}
                  setOpen={setOpenCountry}
                  setValue={setCountryValue}
                  setItems={setCountryType}
                  zIndex={10000}
                  zIndexInverse={1000}
                  placeholder="Select Country"
                  style={styles.pickerContainer}
                  onChangeValue={(value) => {
                    setSelectedCountry(value)
                  }}
                  listMode="FLATLIST"
                  dropDownContainerStyle={styles.dropDownContainerStyle}
                  closeAfterSelecting={true}
                  textStyle={{
                    // fontFamily: Platform.select({
                    //   ios: ' FONTS.AvenirRoman',
                    //   android: ' FONTS.AvenirRoman',
                    // }),
                  }}
                />

                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Address</Text>
                <TextInput
                  name="address"
                  style={styles.textInput}
                  keyboardType='default'
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  placeholderTextColor='#B4B4B4'
                  placeholder=''
                  value={values.address}
                  maxLength={20} />
                {errors.address && touched.address && (
                  <Text style={styles.error}>{errors.address}</Text>
                )}

                

                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>City</Text>
                <TextInput
                  name="city"
                  style={styles.textInput}
                  keyboardType='default'
                  placeholderTextColor='#B4B4B4'
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  placeholder=''
                  value={values.city}
                  maxLength={20} />
                {errors.city && touched.city && (
                  <Text style={styles.error}>{errors.city}</Text>
                )}

                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>State</Text>
                <TextInput
                  name="state"
                  style={styles.textInput}
                  keyboardType='default'
                  placeholderTextColor='#B4B4B4'
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                  placeholder=''
                  value={values.state}
                  maxLength={20} />
                {errors.state && touched.state && (
                  <Text style={styles.error}>{errors.state}</Text>
                )}


                <Text style={{ fontSize: 14, padding: 10, paddingBottom: 0, paddingLeft: 0, fontFamily: FONTS.AvenirRoman }}>Pin Code</Text>
                <TextInput
                  name="pinCode"
                  style={styles.textInput}
                  keyboardType='default'
                  placeholderTextColor='#B4B4B4'
                  onChangeText={handleChange('pinCode')}
                  onBlur={handleBlur('pinCode')}
                  placeholder=''
                  value={values.pinCode}
                  maxLength={20} />
                {errors.pinCode && touched.pinCode && (
                  <Text style={styles.error}>{errors.pinCode}</Text>
                )}
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.inputView}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold', fontFamily: FONTS.AvenirBlack
                      }}>
                      CONTINUE
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView >
    </View >
  );
}
const styles = StyleSheet.create({
  header: {
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
  error: {
    padding: 4,
    color: '#cc0000',
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
    borderColor: '#989898',
    borderWidth: 1,
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
    flex: 1,
     justifyContent: 'center', 
     alignItems: 'center', 
     paddingBottom: 20
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
