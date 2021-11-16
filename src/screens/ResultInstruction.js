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
  StatusBar,
  ScrollView,
  Modal,
  Animated
} from 'react-native';
import CommonBottomButton from '../CommonBottomButton';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import CountDown from 'react-native-countdown-component';
import CommonHeader from '../components/CommonHeader';

const screenHeight = Dimensions.get('window').height;

const TimeOverPopup = ({ visible, children }) => {
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

export default function ResultInstruction() {

  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  return (
    
    <View style={styles.MainContainer}>
            <StatusBar
                hidden={false}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <View style={{ paddingVertical: 40 }}>
                <CommonHeader />
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 0 }} showsVerticalScrollIndicator={false}>
        
        <CountDown
          until={60 * 4 + 60}
          size={20}
          onFinish={() => setVisible(true)}
          digitStyle={{ backgroundColor: '#FFF' }}
          digitTxtStyle={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#474747',
            fontFamily: FONTS.AvenirBlack,
          }}
          timeToShow={['M', 'S']}
          timeToShow={['M', 'S']}
        />

        <Text
          style={{
            fontSize: 12,

            justifyContent: 'center',
            textAlign: 'center',
            color: '#000000',
            paddingVertical: 30,
            fontFamily: FONTS.AvenirRoman,
          }}>
          Warning: Do not record results for tests that{'\n'}have run longer than 10 minutes, repeat test using a{'\n'}new test device.
        </Text>

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
            <TouchableOpacity onPress={() => setVisible(true)}>
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
              </Text></TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                padding: 0,
                justifyContent: 'center',
                textAlign: 'center',
                color: '#474747',
                fontFamily: FONTS.AvenirRoman,
                paddingTop: 90,
                paddingBottom: 20,
                fontWeight: 'bold',
              }}>
              Scan the lines on cassette{'\n'}for full detail report
            </Text>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={images.SampleResult}
                style={{ width: 240, height: 178, resizeMode: 'stretch' }}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Result')}
            >
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
              </Text></TouchableOpacity>

          </View>
        </View>

        <TimeOverPopup visible={visible}>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 380, width: 320 }}>
            <Image source={icons.warning} style={{ width: 50, height: 50, marginTop: 40 }} />
            <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', paddingTop: 20, fontFamily: FONTS.AvenirRoman }}>The test is considered invalid{'\n'}after 10 minutes and it must{'\n'}be conducted again. Do you{'\n'}want to cancel this test or{'\n'}proceed with this test?</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{ flex: 1 }}>
              <View style={{
                backgroundColor: '#ffffff', width: 150, borderColor: '#222D81',
                borderWidth: 1, height: 50, borderRadius: 100, alignItems: 'center',
                justifyContent: 'center', marginTop: 20
              }}>
                <Text
                  style={{
                    color: '#222D81',

                    fontSize: 14,
                    fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                  }}>
                  CANCEL TEST
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={{ flex: 1 }}>
              <View style={{
                backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                justifyContent: 'center', marginTop: 10
              }}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: '800', fontFamily: FONTS.AvenirBlack

                  }}>
                  PROCEED
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TimeOverPopup>
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
        children={"SCAN CASSETTE"} />
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
