import { useNavigation } from '@react-navigation/core';
import React, { } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import CommonBottomButton from '../CommonBottomButton';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import CountDown from 'react-native-countdown-component';

const TimerPopup = ({ visible, children }) => {
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

const SkipPopup = ({ visible, children }) => {
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

export default function TimerScreen(props) {

    const [visible, setVisible] = React.useState(false);

    const [skipPopup, setSkipPopup] = React.useState(false);

    const Record = props.route.params.Record;


    const navigation = useNavigation();

    return (
        <View style={styles.MainContainer}>
            <ScrollView contentContainerStyle showsVerticalScrollIndicator={false}>
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

                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 30, elevation: 5, padding: 20, flex: 1, }}>


                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingBottom: 20 }}>
                        Countdown
                    </Text>

                    <Image source={images.countdown} style={{ width: 200, height: 200, alignSelf: 'center', paddingBottom: 25 }} />
                    <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 16, padding: 10, justifyContent: 'center', textAlign: 'center', color: '#474747', fontFamily: FONTS.AvenirRoman }}>Allow test to run for 5{'\n'} minutes. Read the results{'\n'} in the detection window</Text>
                        <CountDown
                            until={60 * 4 + 60}
                            size={30}
                            onFinish={() => setVisible(true)}
                            digitStyle={{ backgroundColor: '#FFF' }}
                            digitTxtStyle={{ color: '#222D81' }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: 'MM', s: 'SS' }}
                        />
                    </View>
                    <TimerPopup visible={visible}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                            <Image source={icons.clockicon} style={{ width: 50, height: 50, marginTop: 40 }} />
                            <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', paddingTop: 20, fontFamily: FONTS.AvenirRoman }}>5 Minutes are over</Text>
                            <Text style={{ fontSize: 16, padding: 10, fontWeight: 'normal', textAlign: 'center', color: '#00A77D', marginTop: 5, fontFamily: FONTS.AvenirRoman }}>Check the test</Text>


                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 14,
                                            fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                        }}>
                                        CONTINUE
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TimerPopup>

                    <SkipPopup visible={skipPopup}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                            <Image source={icons.warning} style={{ width: 50, height: 50, marginTop: 40 }} />
                            <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', paddingTop: 20, fontFamily: FONTS.AvenirRoman }}>The test should run for the full 5 minute period. Are you sure you want to proceed?</Text>



                            <TouchableOpacity
                                 onPress={() => setSkipPopup(false)}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#ffffff', width: 150, borderColor: '#222D81',
                                    borderWidth: 1, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 0
                                }}>
                                    <Text
                                        style={{
                                            color: '#222D81',

                                            fontSize: 14,
                                            fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                        }}>
                                        NO
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResultInstruction',{
                                    Record : Record
                                })}
                                style={{ flex: 1 }}>
                                <View style={{
                                    backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                    justifyContent: 'center', marginTop: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 14,
                                            fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                        }}>
                                        YES
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SkipPopup>


                </View>
                {/* <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResultInstruction')}
                        >
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                }}>
                                SKIP
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
            <CommonBottomButton
                onPress={() => setSkipPopup(true)}
                children={'Skip'} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20
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
    MainContainer: {
        justifyContent: 'center',
        // padding: 20,
        flex: 1,
        backgroundColor: 'white'
    }
});
