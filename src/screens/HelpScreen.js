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
        categoryName: 'What is Sickle SCAN®?',
        subCategory: [
            {
                id: '1',
                name:
                    "Sickle SCAN® is a multiplexed, qualitative, point-of-care immunoassay used for the rapid diagnosis of sickle cell disorders. The test is made up of three indicators, which detect the presence of haemoglobins A, S and C, allowing the user to rapidly distinguish between normal, carrier and sickle cell samples.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What all is required to conduct a Sickle SCAN® test?',
        subCategory: [
            {
                id: '1',
                name:
                    "Sickle SCAN® test kit contains: \n i. Sickle SCAN® Cartridge \n ii. Capillary Sampler \n iii. Pre-Treatment Module (containing buffer solution) \n iv. Package Insert \n \n Materials not provided but required: Lancet v. Lancet \n vi. Alcohol wipes \n vii. Gloves \n viii. Timer ",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'How quickly can Sickle SCAN® yield results?',
        subCategory: [
            {
                id: '1',
                name:
                    "After the specimen and buffer mixture has been correctly dispensed into the Sickle SCAN® cartridge, it takes only 5 minutes to yield the results. The test results are considered invalid if they are recorded 10 minutes after the test was started (the time when 5 drops of buffer mixed with blood specimen were dropped on the test cartridge).",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What does Sickle SCAN® diagnose?',
        subCategory: [
            {
                id: '1',
                name:
                    "Sickle SCAN® detects the presence of haemoglobins A, S and C in the sample specimen. A combination of one or more of these haemoglobins indicate the hemoglobinopathy status of a person, namely: \n Only A: Normal \n Only S: Sickle Cell Disease (SCD) \n A and S: Sickle Cell Trait (SCT) \n A and C: Hb C trait \n S and C: Hb SC disease \n \n Sickle Cell Trait: People with one sickle cell gene and one normal gene have sickle cell trait (SCT). SCT patients usually do not exhibit any of the symptoms of sickle cell disease (SCD) but have the potential to pass the trait onto their children. If both parents have SCT, there is a 25% probability that their child can have SCD and a 50% probability that the child will have SCT. \n \n Sickle Cell Disease: Sickle Cell Disease (SCD) occurs when people are born with both sickle cell genes and no normal gene. It is an inherited blood disorder that is acquired when both parents have a sickle cell gene. The disorder often causes red blood cells to become sickle-shaped through the presence of the abnormal haemoglobin S variant. The more rigid sickle-shaped blood may have difficulty passing through small blood vessels, blocking the normal blood flow, damaging tissues, and ultimately leading to many of the complications of Sickle Cell Disease including repeated pain crises. \n\n HbSC Disease: HbSC Disease patients have haemoglobin C and haemoglobin S, which are both abnormal haemoglobins. HbSC disease is a milder sickling disorder, and symptoms are similar to that of SCD’s but are less frequent and less severe.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'How to conduct a test?',
        subCategory: [
            {
                id: '1',
                name:
                    "The app contains an instructional video and step by step instructions to help you conduct the test.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Who can get tested with Sickle SCAN®?',
        subCategory: [
            {
                id: '1',
                name:
                    "Sickle SCAN® can be used to test any person older than 24 hours postpartum.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Is any test preparation required to ensure the quality of the sample?',
        subCategory: [
            {
                id: '1',
                name:
                    "No test preparation is needed. However, testing should not be performed after a recent blood transfusion. The test should be conducted only after 6 months have passed since the last blood transfusion.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'Why do we need the Sickle SCAN® app?',
        subCategory: [
            {
                id: '1',
                name:
                    "Sickle SCAN® app eliminates the use of physical registers and records data in the cloud that is accessible anywhere, anytime. The app has the capability to interpret the results simply by scanning the test cartridge with the in-built camera on your mobile device, thereby eliminating human error. Step by step instructions ensures that a health professional conducts the tests accurately",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What to do if the app records wrong results?',
        subCategory: [
            {
                id: '1',
                name:
                    "It is possible that the app may interpret the results differently from what is visible to the human eye due to lighting conditions, smudged camera lens, camera malfunction etc. The app provides the health professional with the option to override the results.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What is an invalid result and what should be done next?',
        subCategory: [
            {
                id: '1',
                name:
                    "When the ctrl line is not visible then the test is considered to be invalid. In such a case, the test should be conducted again with a new test cartridge. If the problems persist, you should contact the manufacturer immediately.",
            },

        ],
    },

    {
        id: '42',
        categoryName: 'What happens if 10 minutes have passed since the test was started?',
        subCategory: [
            {
                id: '1',
                name:
                    "The test is considered invalid after 10 minutes and it must be conducted again.",
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
                            <Image source={icons.backarrow} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                        </View>
                    </TouchableOpacity>

                    <Image source={images.headerlogo} style={{ width: 95, height: 53, alignItems: 'center', justifyContent: 'center' }} />
                    <View></View>
                </View>
                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', padding: 50, paddingBottom: 0, fontFamily: FONTS.AvenirBlack }}>
                    Help / FAQ's
                </Text>

                <Text style={{ fontSize: 14, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000000', padding: 50, paddingTop: 0, fontFamily: FONTS.AvenirBlack }}>
                    help@sicklescan.com
                </Text>

                <View>
                    <ExpandableListView
                        data={CONTENT} // required
                        onInnerItemClick={handleInnerItemClick}
                        onItemClick={handleItemClick}
                        itemLabelStyle={{ backgroundColor: '#FFFFFF', color: '#101E8E', fontSize: 14,flexWrap: 'wrap',flexShrink: 1, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
                        itemContainerStyle={{ backgroundColor: '#FFFFFF', color: '#101E8E', margin: 10, elevation: 5,  padding: 5, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
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
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white',
    }
});
