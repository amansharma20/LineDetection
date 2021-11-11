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
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const screenHeight = Dimensions.get('window').height;

export default function ManualResultScreen() {
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
                            <Image source={icons.backarrow} style={{ width: 25, height: 25 }} />
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
                            Select Result Manually
                        </Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                            <Image
                                source={images.hbaa}
                                style={{ width: 50, height: 130, resizeMode: 'stretch' }}
                            />
                            <Image
                                source={images.hbas}
                                style={{ width: 50, height: 130, resizeMode: 'stretch' }}
                            />
                            <Image
                                source={images.hbss}
                                style={{ width: 50, height: 130, resizeMode: 'stretch' }}
                            />
                            <Image
                                source={images.hbac}
                                style={{ width: 50, height: 130, resizeMode: 'stretch' }}
                            />
                            <Image
                                source={images.hbsc}
                                style={{ width: 50, height: 130, resizeMode: 'stretch' }}
                            />
                        </View>

                        <Text
                            style={{
                                fontSize: 12,

                                justifyContent: 'center',
                                textAlign: 'center',
                                color: '#000000',
                                paddingVertical: 30,
                                fontFamily: FONTS.AvenirRoman,
                            }}>
                            Invalid: If Control (Ctrl) line does not appear within 5 minutes of running the test, repeat test using a new test device.
                        </Text>
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
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Summary')}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    fontFamily: FONTS.AvenirBlack,
                                }}>
                                ADD
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingLeft: 0,
        paddingRight: 0,
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
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
    },
});
