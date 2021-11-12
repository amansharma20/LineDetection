/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { icons, images } from '../Constants/Index';
import { useNavigation } from '@react-navigation/core';

const CommonHeader = ({ children, ...rest }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header} {...rest}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View>
                    <Image source={icons.backarrow} style={{ width: 25, height: 25, resizeMode: 'contain', }} />
                </View>
            </TouchableOpacity>
            <Image source={images.headerlogo} style={{ width: 95, height: 53, marginRight: 10 }} />
            <View></View>
        </View>
    );
};

export default CommonHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10, paddingTop: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
});
