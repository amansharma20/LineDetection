import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FONTS } from '../Constants/Theme';
import CommonHeader from '../components/CommonHeader';
import _ from 'lodash';




export default function SelectDatabase(props) {

    const navigation = useNavigation();
    const details = props.route.params.PatientRecord;

    return (
        <View style={styles.MainContainer}>
            <CommonHeader />

            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                            Search Database
                        </Text>
                    </TouchableOpacity>


                    {_.map(details, (value, index) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('SearchResult', {
                                PatientRecord: details
                            })}>
                                <Text style={{ marginLeft: 100 }}>{value.FullName}</Text>
                                <Text style={{ marginLeft: 100 }}>{value.Gender}</Text>
                            </TouchableOpacity>
                        );
                    })}


                </ScrollView>
            </View>




        </View>
    );
}



const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingLeft: 0, paddingRight: 0,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 100,
        height: 55,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222D81',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropDownContainerStyle: {
        backgroundColor: 'white',
    },
    pickerContainer: {
        backgroundColor: '#FBF9F9',
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 0,
        height: 40,
        marginTop: 10,
    },
    modalContainer: {
        width: 20,
        height: 30,
        backgroundColor: 'green',
        elevation: 20,
    },
    textInput: {
        backgroundColor: '#FBF9F9',
        borderWidth: 1,
        color: '#101E8E',
        width: '100%',
        height: 40,
        paddingLeft: 10,
        borderColor: '#989898',
        marginTop: 2
    },
    inputs: {
        height: '47%',
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        // padding: 20,
        backgroundColor: 'white'
    },
    textFieldLabel: {
        fontSize: 14,
        padding: 10,
        paddingBottom: 0,
        paddingLeft: 0,
        // fontFamily: FONTS.AvenirRoman
    },
    error: {
        padding: 4,
        color: '#cc0000',
    },
});
