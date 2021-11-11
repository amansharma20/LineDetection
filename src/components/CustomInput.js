import React from "react";
import {Text, TextInput, StyleSheet, View} from 'react-native';

const CustomInput = props => {
    const {
        field: {name, onBlur, onChange, value},
        form: { errors, touched, setFieldTouched},
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];

    return (
        <>
         <View style={styles.container}>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        placeholderTextColor={'#c2c2c2'}
        onBlur={() => {
          setFieldTouched(name);
          
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%'},
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: '#FBF9F9',
    borderColor: 'red',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    color: '#000000',
  },
  errorText: {
    fontSize: 10,
    color: '#cc0000',
    padding: 4,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default CustomInput;
