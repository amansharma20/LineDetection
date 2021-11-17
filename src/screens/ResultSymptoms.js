import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { FONTS, } from '../Constants/Theme';
import CommonBottomButton from '../CommonBottomButton';
import CommonHeader from '../components/CommonHeader';

const screenHeight = Dimensions.get('window').height;

export default function ResultSymptoms(props) {
    const navigation = useNavigation();
    const imageData = props.route.params.resultData.base64.base64;
    const result = props.route.params.resultData.result;
    const Record = props.route.params.resultData.Record;

    
    return (
        <SafeAreaView style={styles.MainContainer}>
            <StatusBar
                hidden={false}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingVertical: 40 }}>
                    <CommonHeader />
                </View>
                <View style={{ backgroundColor: 'white', margin: 20, elevation: 5, padding: 20, flex: 1, paddingTop: 40 }}>
                    <View style={styles.inputs}>
                        <Text style={{ fontSize: 25, textAlign: 'center', justifyContent: 'center', paddingTop: 2, fontFamily: FONTS.AvenirBlack, fontWeight: 'normal', }}>Result</Text>
                        <Text style={{ fontSize: 30, textAlign: 'center', justifyContent: 'center', color: '#CF0A2C', fontWeight: 'bold', fontFamily: FONTS.AvenirBlack }}>{result}</Text>

                        <Image style={{ width: '100%', height: 300, resizeMode: 'contain', alignSelf: 'center', paddingVertical: 20 }}
                            source={{ uri: `data:image/jpeg;base64,${imageData}` }} />
                        <Text style={{ fontSize: 24, padding: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'normal', fontFamily: FONTS.AvenirBlack, paddingTop: 20 }}>{result}</Text>
                        <Text style={{ fontSize: 10, padding: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'normal', fontFamily: FONTS.AvenirBlack, paddingTop: 20 }}>Is the test result different? If so, please select the result manually.</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ManualResultScreen')}>
                            <Text style={{ fontSize: 18, padding: 10, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#222D81', fontFamily: FONTS.AvenirBlack }}>SELECT RESULT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <CommonBottomButton
                onPress={() => navigation.navigate('Summary',{
                    Record : Record,
                    result : result
                })}
                children={'FINISH TEST'} />
        </SafeAreaView>
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
