/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CommonBottomButton from '../CommonBottomButton';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

export default function ResultInstruction() {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',

            }}>
            <View>
              <Image source={icons.backarrow} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
            </View>
          </TouchableOpacity>

          <Image source={images.headerlogo} style={{ width: 95, height: 53, alignItems: 'center', justifyContent: 'center' }} />
          <View></View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            marginVertical: 30,
            elevation: 5,
            padding: 30,
            flex: 1,
          }}>
          <View style={styles.inputs}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#101E8E',
                fontFamily: FONTS.AvenirBlack,
              }}>
              How to scan test?
            </Text>
            <Text
              style={{
                fontSize: 14,
                padding: 0,
                justifyContent: 'center',
                textAlign: 'center',
                color: '#474747',
                fontFamily: FONTS.AvenirRoman,
                paddingTop: 90,
                paddingBottom: 20,
                fontWeight: 'bold',
              }}>
              Please scan the lines on cassette{'\n'}for full detail report
            </Text>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.SampleResult}
                style={{ width: 240, height: 178, resizeMode: 'stretch' }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                padding: 10,
                justifyContent: 'center',
                textAlign: 'center',
                color: '#000000',
                paddingVertical: 30,
                fontFamily: FONTS.AvenirRoman,
                fontWeight: 'bold',
              }}>
              Sample Image
            </Text>
            <Text
              style={{
                fontSize: 12,

                justifyContent: 'center',
                textAlign: 'center',
                color: '#000000',
                paddingVertical: 30,
                fontFamily: FONTS.AvenirRoman,
              }}>
              Warning: Do not record results for tests that have run longer than 10 minutes, repeat test using a new test device.
            </Text>
          </View>
        </View>
        {/* <View>
          <TouchableOpacity onPress={() => navigation.navigate('Cassette')}
          >
            <View style={styles.buttonContainer}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: FONTS.AvenirBlack,
                }}>
                SCAN CASSETTE
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <CommonBottomButton
        onPress={() => navigation.navigate('Cassette')}
        children={"Scan Cassette"} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 100,
    marginTop: 30,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222D81',
  },
  textInput: {
    borderColor: '#989898',
    borderWidth: 1,
    backgroundColor: '#FBF9F9',
    color: '#1C1B1B',
    paddingHorizontal: 16,
  },
  inputs: {
    height: '47%',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});
