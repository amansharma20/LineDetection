import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CommonHeader from '../components/CommonHeader';
import images from '../Constants/Images';

export default function InstructionsScreen(props) {

    const navigation = useNavigation();
    const Record = props.route.params.Record;


    return (
        <View style={styles.MainContainer}>

            {/* <View style={{ paddingHorizontal: 20 }}> */}
            <CommonHeader />
            {/* </View> */}

            <View style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 20, paddingTop: 40, paddingBottom: 20 }}>
                    <View style={{
                        backgroundColor: 'white', alignSelf: 'center', flex: 1, width: '100%', elevation: 5,
                        alignItems: 'center', paddingTop: 20
                    }}>
                        <Text style={{ alignSelf: 'center', fontSize: 20, color: '#101E8E', fontWeight: '700' }}>
                            Step By Step Instructions
                        </Text>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={images.fivedrops} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
                                <Text style={{
                                    textAlign: 'center', alignSelf: 'center', paddingHorizontal: 80, paddingTop: 24,
                                    color: '#474747', fontSize: 16
                                }}>
                                    Dispense 5 drops of the
                                    treated sample into the
                                    Test Cassette sample well
                                </Text>
                            </View>
                        </View>


                    </View>
                </View>

            </View>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ paddingBottom: 20, elevation: 8, backgroundColor: 'white', paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StopWatch',{
                            Record : Record

                        })}
                        activeOpacity={0.9}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 8
                        }}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    //  fontFamily: FONTS.AvenirBlack

                                }}>
                                START TIMER
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        height: 55,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
        elevation: 8
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
});
