/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    StyleSheet,
    ScrollView,
    Pressable,
    Modal,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    getModel,
    convertBase64ToTensor,
    startPrediction,
} from '../helpers/tensor-helper';

import { Camera } from 'expo-camera';

import { cropPicture } from '../helpers/image-helper';
import { icons, images } from '../Constants/Index';
import CommonHeader from '../components/CommonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const RESULT_MAPPING = ['AA', 'AS', 'Invalid', 'SS'];

// const dataImageGlobal = ""



export default function CassetteScan() {
    const navigation = useNavigation();

    const cameraRef = useRef();
    const [isProcessing, setIsProcessing] = useState(false);
    const [presentedShape, setPresentedShape] = useState('');

    const [hasPermission, setHasPermission] = useState(null);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleImageCapture = async () => {
        setIsProcessing(true);
        const imageData = await cameraRef.current.takePictureAsync({
            base64: true,
        });
        processImagePrediction(imageData);
    };

    const processImagePrediction = async (base64Image) => {
        const croppedData = await cropPicture(base64Image, 300);
        // console.log('croppedData', croppedData, 'croppedData');
        const model = await getModel();
        const tensor = await convertBase64ToTensor(croppedData.base64);

        const prediction = await startPrediction(model, tensor);
        console.log('prediction');
        console.log(prediction);
        console.log('prediction');

        const highestPrediction = prediction.indexOf(
            Math.max.apply(null, prediction),
        );
        console.log('highestPrediction');
        console.log(highestPrediction);
        console.log('highestPrediction');
        setPresentedShape(RESULT_MAPPING[highestPrediction]);
        // navigation.navigate('Result', (RESULT_MAPPING[highestPrediction] || croppedData) )
        navigation.navigate('Result', {
            resultData: { base64: croppedData, result: RESULT_MAPPING[highestPrediction] }
        })
    };

    return (
        <SafeAreaView style={{flex: 1}}>

            <ScrollView contentContainerStyle={{ flex: 1 }} style={styles.container}>
                <CommonHeader />


                <Modal statusBarTranslucent visible={isProcessing} transparent={true} animationType="slide">
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>
                            {console.log(presentedShape)}
                            <Text>Your current result is {presentedShape}</Text>
                            {presentedShape === '' &&
                                (
                                    <Text style={{textAlign: 'center'}}>
                                        Loading... {'\n'}
                                        (It may take upto a minute.)
                                    </Text>
                                    
                                )
                            }
                            <Pressable
                                style={styles.dismissButton}
                                onPress={() => {
                                    setPresentedShape('');
                                    setIsProcessing(false);
                                }}>
                                <Text>Dismiss</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View
                    style={{ flex: 1 }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'right',
                            justifyContent: 'flex-end',
                            fontWeight: 'bold',
                            color: '#474747',
                            paddingRight: 40,
                            paddingBottom: 10,
                        }}>
                        06:41
                    </Text>
                    <Camera
                        ref={cameraRef}
                        type={Camera.Constants.Type.back}
                        autoFocus={true}
                        whiteBalance={Camera.Constants.WhiteBalance.auto}
                        style={styles.camera}
                    />
                </View>


                <View style={{ alignItems: 'center', height: '20%', marginVertical: 40, justifyContent: 'space-between' }}>

                    <Pressable
                        onPress={() => handleImageCapture()}
                        style={styles.captureButton}
                    />
                    <Text style={{ fontSize: 16, color: '#474747', alignSelf: 'center', paddingTop: 15, textAlign: 'center', paddingHorizontal: 20, fontWeight: 'bold' }}>
                        Please align the cartridge in the{'\n'}frame above to scan it

                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ManualResultScreen')}>
                        <Text style={{ fontSize: 30, color: '#101E8E', fontWeight: 'bold' }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>


                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20
    },
    camera: {
        width: '80%',
        height: '100%',
        alignSelf: 'center'
    },
    captureButton: {
        // bottom: 40,
        width: 60,
        // zIndex: 100,
        height: 60,
        backgroundColor: '#CF0A2C',
        borderRadius: 50,
        // marginBottom: 40
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 24,
        backgroundColor: 'white',
    },
    dismissButton: {
        width: 150,
        height: 50,
        marginTop: 60,
        borderRadius: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});
