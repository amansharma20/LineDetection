import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FONTS } from '../Constants/Theme';
import CommonHeader from '../components/CommonHeader';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import _ from 'lodash';
import { format } from 'date-fns';

const stylesCheckbox = {
    textStyle: { textDecorationLine: 'none', color: '#101E8E', },
};

const staticData = [
    {
        id: 0,
        fillColor: '#101E8E',
        text: 'Data is sbhwdhjbw',
        textStyle: stylesCheckbox.textStyle,

    },
];

export default function SelectDatabase(props) {

    const navigation = useNavigation();
    const details = props.route.params.PatientRecord;

    const formatedDate = (date) => {
        var formattedDate = format(date, 'd MMM yyyy');
        return formattedDate;
    };




    const [bouncyData, setBouncyData] = useState(staticData)
    const [selectedPatent, setSelectedPatient] = useState();

    useEffect(() => {
        var bouncyCheckBoxData = []
        {
            _.map(details, (value, index) => {
                let data = {
                    id: index,
                    fillColor: '#101E8E',
                    text: `${value.FullName}    ${value.Gender}  ${formatedDate(new Date(value.DateOfBirth))}`,
                    textStyle: stylesCheckbox.textStyle,
                    patient: value
                }
                bouncyCheckBoxData.push(data);
            })
            setBouncyData(bouncyCheckBoxData)
        }

    }, [])

    return (
        <View style={styles.MainContainer}>
            <CommonHeader />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: 'white', marginHorizontal: 20, marginVertical: 20, elevation: 5, padding: 20, flex: 1, height: 380 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 30, fontFamily: FONTS.AvenirBlack }}>
                        Select
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <BouncyCheckboxGroup
                            data={bouncyData}
                            style={{ flexDirection: "column" }}
                            onChange={(selectedItem: ICheckboxButton) => {
                                console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                setSelectedPatient(selectedItem.patient);
                            }}
                        />
                    </View>

                </View>

                <View style={{ justifyContent: 'center', padding: 20, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchResult', {
                        PatientRecord: selectedPatent
                    })}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View style={styles.buttonContainer}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    fontFamily: FONTS.AvenirBlack
                                }}>
                                SEARCH
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
