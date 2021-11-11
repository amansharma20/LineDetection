import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import images from '../Constants/Images';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { icons } from '../Constants/Index';
import { FONTS, } from '../Constants/Theme';
import CommonBottomButton from '../CommonBottomButton';

const AddPopup = ({ visible, children }) => {
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

export default function ResultSymptoms(props) {

    const [visible, setVisible] = React.useState(false);

    const navigation = useNavigation();

    const imageData = props.route.params.resultData.base64.base64;
    const result = props.route.params.resultData.result;

    console.log(imageData);

    return (
        <View style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>

                    <Image source={images.headerlogo} style={{ width: 95, height: 53, justifyContent: 'center', alignItems: 'center' }} />

                </View>

                <View style={{ backgroundColor: 'white', margin: 20, elevation: 5, padding: 20, flex: 1, paddingTop: 40 }}>


                    <View style={styles.inputs}>

                        <Text style={{ fontSize: 25, textAlign: 'center', justifyContent: 'center', paddingTop: 2, fontFamily: FONTS.AvenirBlack, fontWeight: 'normal', }}>Result</Text>

                        <Text style={{ fontSize: 30, textAlign: 'center', justifyContent: 'center', color: '#CF0A2C', fontWeight: 'bold', fontFamily: FONTS.AvenirBlack }}>Sickle Cell Trait</Text>

                        <Image style={{ width: '100%', height: 300, resizeMode: 'contain', alignSelf: 'center', paddingVertical: 20 }}
                            source={{ uri: `data:image/jpeg;base64,${imageData}` }} />


                        <Text style={{ fontSize: 24, padding: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'normal', fontFamily: FONTS.AvenirBlack, paddingTop: 20 }}>{result}</Text>

                        <Text style={{ fontSize: 10, padding: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'normal', fontFamily: FONTS.AvenirBlack, paddingTop: 20 }}>Is the result displayed on the test same as displayed on the screen? If No, then</Text>



                        <AddPopup visible={visible}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                                <Text style={{ fontSize: 16, paddingTop: 30, fontWeight: '400', color: '#000000', fontFamily: FONTS.AvenirBlack }}>Add Result Manually</Text>
                                <View style={{ paddingVertical: 10 }}>
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="Normal"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                    />
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="Sickle Cell Trait"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                    />
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="Sickle Cell Disease"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                    />
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="AC Trait"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                    />
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="SC Disease"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                    />
                                    <BouncyCheckbox
                                        size={20}
                                        style={styles.checkboxStyle}
                                        fillColor="#101E8E"
                                        unfillColor="#FFFFFF"
                                        text="Invalid"
                                        iconStyle={{ borderColor: "#101E8E", }}
                                        textStyle={{
                                            textDecorationLine: "none", fontSize: 14, fontFamily: FONTS.AvenirBlack
                                        }}
                                        onPress={() => navigation.navigate('Home')}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() => setVisible(false)}
                                    style={{ flex: 1 }}>
                                    <View style={{
                                        backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text
                                            style={{
                                                color: '#ffffff',
                                                fontSize: 18,
                                                fontWeight: 'bold', fontFamily: FONTS.AvenirBlack

                                            }}>
                                            ADD
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </AddPopup>

                        <TouchableOpacity onPress={() => navigation.navigate('ManualResultScreen')}>
                            <Text style={{ fontSize: 18, padding: 10, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#222D81', fontFamily: FONTS.AvenirBlack }}>SELECT RESULT</Text>
                        </TouchableOpacity>




                    </View>

                </View>
                {/* <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Summary')}
                    >
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                }}>
                                FINISH TEST
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
            <CommonBottomButton
                onPress={() => navigation.navigate('Summary')}
                children={'FINISH TEST'} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 5, paddingVertical: 20
    },
    checkboxStyle: {
        paddingVertical: 5
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
    inputs: {
        height: '47%',
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
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white'
    }
});
