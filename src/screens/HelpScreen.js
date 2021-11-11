import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { ExpandableListView } from 'react-native-expandable-listview';
import { FONTS } from '../Constants/Theme';
const screenHeight = Dimensions.get('window').height;

const CONTENT = [
    {
        id: '42',
        categoryName: 'What is Sickle SCAN?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What do I need to run Sickle SCAN?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'How quickly can Sickle SCAN yield results?',
        subCategory: [
            {
                id: '1',
                name:
                    "After the specimen and buffer mixture has been correctly dispensed into the BioMedomics Sickle SCAN cartridge, allow the test to run for 5 minutes.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'How accurate is Sickle SCAN?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Does Sickle SCAN test for sickle cell anemia?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What do the results tell me?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Who is at risk for sickle cell disease?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Who can use Sickle SCAN?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Is any test preparation needed to ensure the quality of the sample?',
        subCategory: [
            {
                id: '1',
                name:
                    "BioMedomics Sickle SCAN is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of hemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples",
            },

        ],
    },

];

export default function HelpScreen() {

    const navigation = useNavigation();

    function handleItemClick({ index }) {
        console.log(index);
    };

    function handleInnerItemClick({ innerIndex, item, itemIndex }) {
        console.log(innerIndex);
    };




    return (
        <View style={styles.MainContainer}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
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
                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 50, fontFamily: FONTS.AvenirBlack }}>
                    Help / FAQ's
                </Text>

                <View>
                    <ExpandableListView
                        data={CONTENT} // required
                        onInnerItemClick={handleInnerItemClick}
                        onItemClick={handleItemClick}
                        itemLabelStyle={{ backgroundColor: '#FFFFFF', color: '#101E8E', fontSize: 14, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
                        itemContainerStyle={{ backgroundColor: '#FFFFFF', color: '#101E8E', margin: 10, elevation: 5, padding: 5, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
                        innerItemContainerStyle={{ backgroundColor: '#FFFFFF', margin: 10, elevation: 0, padding: 0, fontFamily: FONTS.AvenirRoman, }}
                        renderInnerItemSeparator={true}
                        renderItemSeparator={false}
                    />
                </View>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5,
    },
    MainContainer: {
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
        paddingTop:30
    }
});
