/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React, { } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
    Platform,
    ScrollView,
} from 'react-native';
import images from '../Constants/Images';
import { icons, SIZES, FONTS } from '../Constants/Index';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../persistance/query/GQLQuery';

const screenHeight = Dimensions.get('window').height;

export default function HomeScreen() {
    const navigation = useNavigation();

    const { data, error } = useQuery(GQLQuery.GET_PROFILE);
    const HealthWorkerProfileData = data && data.HealthWorkerUserQuery && data.HealthWorkerUserQuery.GetHealthWorkerUserDetails;

    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.header}>
                <Image source={images.headerlogo} style={{ width: 95, height: 53 }} />
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={images.profile}
                        style={{
                            width: 55,
                            height: 55,
                            borderRadius: 100,
                            borderColor: '#CF0A2C',
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={{}}>
                    <YoutubePlayer
                        height={375}
                        videoId={'3fQeWGPpIVw'}
                        webViewStyle={{ height: 100, justifyContent: 'flex-end', width: '100%' }}
                    />
                </View>
                <View style={{ backgroundColor: '#CF0A2C', width: '100%', height: 40, marginTop: -180 }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: 'white',
                            padding: 10,
                            textAlign: 'center',
                            fontFamily: FONTS.AvenirBlack,
                        }}>
                        Step by step guide on how to conduct a test
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 30,
                        paddingBottom: 0,
                    }}>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: 'center',
                            color: '#474747',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontFamily: FONTS.AvenirBlack,
                        }}>
                        Welcome
                    </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            color: '#CF0A2C',
                            fontFamily: FONTS.AvenirBlack,
                        }}>
                        {HealthWorkerProfileData && HealthWorkerProfileData.FirstName} {HealthWorkerProfileData && HealthWorkerProfileData.LastName}
                    </Text>
                </View>
            </View>

            {/* <View style={styles.footer}> */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 10,
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PatientDetails')}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40,
                    }}>
                    <View style={styles.inputView}>
                        <Image source={icons.newtesticon} style={{ width: 36, height: 36 }} />
                        <Text
                            style={{
                                color: '#101E8E',
                                fontSize: 14,
                                fontFamily: FONTS.AvenirRoman,
                                paddingTop: 20,
                            }}>
                            New Test
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 10,
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SearchPatient')}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 0,
                    }}>
                    <View style={styles.inputView}>
                        <Image source={icons.searchicon} style={{ width: 36, height: 36 }} />
                        <Text
                            style={{
                                color: '#101E8E',
                                fontSize: 14,
                                fontFamily: FONTS.AvenirRoman,
                                paddingTop: 20,
                                flexWrap: 'wrap',
                                textAlign: 'center'
                            }}>
                            Search Database
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Help')}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 0,
                    }}>
                    <View style={styles.inputView}>
                        <Image source={icons.helpicon} style={{ width: 36, height: 36 }} />
                        <Text
                            style={{
                                color: '#101E8E',
                                fontSize: 14,
                                fontFamily: FONTS.AvenirRoman,
                                paddingTop: 20,
                            }}>
                            Help & Faqs
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    paddingBottom: 10,
                }}>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        color: '#989898',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontFamily: FONTS.AvenirBlack,
                    }}>
                    Powered by:
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: '#101E8E',
                        fontFamily: FONTS.AvenirBlack,
                    }}>
                    {' '}
                    Webority Technologies
                </Text>
            </View>
            {/* </View> */}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.select({
            ios: 30,
            android: 0,
        }),
    },
    header: {
        paddingHorizontal: 36,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    inputView: {
        width: 129,
        height: 112,
        marginBottom: 20,
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding2,
        borderBottomColor: '#CF0A2C',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderWidth: 5,
        marginTop: screenHeight / 6,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 2,
        elevation: 5,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
