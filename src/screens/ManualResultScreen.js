/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    Modal,
    Animated,
    StatusBar
} from 'react-native';
import images from '../Constants/Images';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from 'react-native-bouncy-checkbox-group';
import CommonBottomButton from '../CommonBottomButton';
import CommonHeader from '../components/CommonHeader';

const ResultPopup = ({ visible, children }) => {
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

const stylesCheckbox = {
    textStyle: { textDecorationLine: 'none', color: '#474747', marginRight: 40, marginVertical: 8 },
};

const staticData = [
    {
        id: 0,
        fillColor: '#101E8E',
        text: 'HbAA - Normal',
        textStyle: stylesCheckbox.textStyle,

    },
    {
        id: 1,
        fillColor: '#101E8E',
        text: 'HbAS - Sickle Cell Trait',
        textStyle: stylesCheckbox.textStyle,
    },
    {
        id: 2,
        fillColor: '#101E8E',
        text: 'HbSS - Sickel Cell Disease',
        textStyle: stylesCheckbox.textStyle,
    },
    {
        id: 3,
        fillColor: '#101E8E',
        text: 'HbAC - AC Trait',
        textStyle: stylesCheckbox.textStyle,
    },
    {
        id: 4,
        fillColor: '#101E8E',
        text: 'HbSC - HbSC Disease',
        textStyle: stylesCheckbox.textStyle,
    },
    {
        id: 5,
        fillColor: '#101E8E',
        text: 'Invalid',
        textStyle: stylesCheckbox.textStyle,
    },

];

const screenHeight = Dimensions.get('window').height;

export default function ManualResultScreen() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <View style={styles.MainContainer}>
            <StatusBar
                hidden={false}
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <View style={{ paddingVertical: 40 }}>
                <CommonHeader />
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 0 }} showsVerticalScrollIndicator={false}>



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
                     
                        <View style={{ alignItems: 'center', flexDirection: 'row', alignSelf: 'center', paddingTop: 50, }}>
                            <Image
                                source={images.hbaa}
                                style={{ width: 50, height: 180, resizeMode: 'stretch', marginHorizontal: 6 }}
                            />
                            <Image
                                source={images.hbas}
                                style={{ width: 50, height: 180, resizeMode: 'stretch', marginHorizontal: 6 }}
                            />
                            <Image
                                source={images.hbss}
                                style={{ width: 50, height: 180, resizeMode: 'stretch', marginHorizontal: 6 }}
                            />
                            <Image
                                source={images.hbac}
                                style={{ width: 50, height: 180, resizeMode: 'stretch', marginHorizontal: 6 }}
                            />
                            <Image
                                source={images.hbsc}
                                style={{ width: 50, height: 180, resizeMode: 'stretch' }}
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
                            Invalid: If Control (Ctrl) line does not appear{'\n'}within 5 minutes of running the test, repeat test using a new test device.
                        </Text>
                        <View style={{ paddingVertical: 10, }}>

                            <BouncyCheckboxGroup
                                text={staticData}
                                data={staticData}
                                style={{ flexDirection: "column", }}
                                onChange={(selectedItem: ICheckboxButton) => {
                                    console.log('SelectedItem: ', JSON.stringify(selectedItem));
                                    if (selectedItem.id === 5) {
                                        navigation.navigate('Home')
                                    }
                                    if (selectedItem.id === 4) {
                                        setVisible(true)
                                    }
                                    if (selectedItem.id === 3) {
                                        setVisible(true)
                                    }
                                    if (selectedItem.id === 2) {
                                        setVisible(true)
                                    }
                                    if (selectedItem.id === 1) {
                                        setVisible(true)
                                    }
                                    if (selectedItem.id === 0) {
                                        setVisible(true)
                                    }

                                }}

                            />

                        </View>
                    </View>
                </View>

                <ResultPopup visible={visible}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', elevation: 5, height: 300, width: 250 }}>
                        <Image source={icons.warning} style={{ width: 50, height: 50, marginTop: 40 }} />
                        <Text style={{ fontSize: 16, padding: 10, fontWeight: '400', textAlign: 'center', color: '#474747', paddingTop: 20, fontFamily: FONTS.AvenirRoman }}>The selected test result is{'\n'}different from the one{'\n'}recorded by the app</Text>


                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            style={{ flex: 1 }}>
                            <View style={{
                                backgroundColor: '#222D81', width: 150, height: 50, borderRadius: 100, alignItems: 'center',
                                justifyContent: 'center', marginTop: 30
                            }}>
                                <Text
                                    style={{
                                        color: '#ffffff',
                                        fontSize: 14,
                                        fontWeight: '800', fontFamily: FONTS.AvenirBlack

                                    }}>
                                    ACCEPT
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ResultPopup>
                {/* <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Summary')}
                    >
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
                </View> */}
            </ScrollView>
            <CommonBottomButton
                onPress={() => navigation.navigate('Summary')}
                children={'ADD'} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20, paddingLeft: 0, paddingRight: 0,
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
        flex: 1,
        backgroundColor: 'white',
    },
});
