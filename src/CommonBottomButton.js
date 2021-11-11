/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const CommonBottomButton = ({ children, ...rest }) => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingBottom: 20, elevation: 8, backgroundColor: 'white', paddingHorizontal: 20 }}>
            <TouchableOpacity
                {...rest}
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
                        {children}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default CommonBottomButton;

const styles = StyleSheet.create({
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
});
