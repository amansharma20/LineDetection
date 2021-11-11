import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity, Platform, Dimensions, Image, StyleSheet } from 'react-native';
import images from '../Constants/Images';
import { SIZES, FONTS } from '../Constants/Index';
const screenHeight = Dimensions.get('window').height;
export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <View style={styles.header}>
                <Image
                    source={images.logo} style={{ width: 150, height: 90, }}
                />
            </View>
            <View style={styles.body}>
            
                <Text style={{ fontSize: 30, textAlign: 'center', justifyContent: 'center', fontWeight: '800', paddingTop:50, color: '#474747', fontFamily: FONTS.AvenirBlack }}>Welcome</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
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
                                fontWeight: '800',
                                fontFamily: FONTS.AvenirBlack
                            }}>
                            REGISTER
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 30,
                        marginTop: -30,
                    }}>
                    <View
                        style={{
                            width: '100%',
                            borderRadius: 100,
                            height: 55,
                            marginBottom: 20,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding2,
                            marginTop: screenHeight / 6,
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderColor: '#101E8E',
                            borderWidth: 1,
                            elevation: 5,
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                color: '#101E8E',
                                fontSize: 18,
                                fontWeight: '800',
                                fontFamily: FONTS.AvenirBlack
                            }}>
                            LOGIN
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            {/* <View style={styles.footer}>
                <Text style={{ fontSize: 14, color: '#2E3E5C', marginTop: 150, fontFamily: FONTS.AvenirRoman, fontWeight: '400' }}>Privacy Policy</Text>
                <Text style={{ fontSize: 14, color: '#2E3E5C', fontFamily: FONTS.AvenirRoman, fontWeight: '400' }}>Terms &amp; Conditions</Text>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom:80,
    },
    inputView: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
        marginTop: 50,
    },
    body: {
        flex: 1, justifyContent: 'center', paddingBottom:280
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});
