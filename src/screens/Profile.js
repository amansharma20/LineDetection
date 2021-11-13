import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { CommonStyles } from '../../utlis/assests/CommonStyles';
import images from '../Constants/Images';
import { useQuery } from '@apollo/client';
import { AuthContext } from '../navigation/ApplicationNavigator';
import { icons } from '../Constants/Index';
import { FONTS } from '../Constants/Theme';
import { GQLQuery } from '../persistance/query/GQLQuery';
import CommonHeader from '../components/CommonHeader';


export default function Profile() {

    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    const { data, error } = useQuery(GQLQuery.GET_PROFILE);
    const HealthWorkerProfileData = data && data.HealthWorkerUserQuery && data.HealthWorkerUserQuery.GetHealthWorkerUserDetails;

    console.log(data)
    console.log(error)


    return (
        <SafeAreaView style={styles.MainContainer}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <CommonHeader />

                <View style={[{ alignSelf: 'center', width: '100%', marginTop: 50, marginHorizontal: 20, backgroundColor: '#fff', padding: 20, flex: 1, paddingBottom: 50, marginBottom: 5 }, CommonStyles.appShadow]}>
                    <View style={{ position: 'absolute', alignSelf: 'center', marginTop: -50 }}>
                        <Image source={images.profile} style={{ width: 100, height: 100, borderRadius: 100, borderColor: '#CF0A2C', alignItems: 'center', justifyContent: 'center', resizeMode: 'center' }} />
                    </View>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingTop: 50 }}>
                        {HealthWorkerProfileData && HealthWorkerProfileData.FirstName} {HealthWorkerProfileData && HealthWorkerProfileData.LastName}
                    </Text>
                    <Text style={{ fontSize: 14, opacity: 0.5, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#474747', fontFamily: FONTS.AvenirBlack }}>
                        {HealthWorkerProfileData && HealthWorkerProfileData.ApplicationUser.Email}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 50 }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Organization</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                            {HealthWorkerProfileData && HealthWorkerProfileData.Organization}
                        </Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Department</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                            {HealthWorkerProfileData && HealthWorkerProfileData.Department}
                        </Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Mobile Number</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                            {HealthWorkerProfileData && HealthWorkerProfileData.ApplicationUser.PhoneNumber}
                        </Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Address</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                            {HealthWorkerProfileData && HealthWorkerProfileData.Address}
                        </Text></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, padding: 10, fontWeight: '400', color: '#989898', fontFamily: FONTS.AvenirBlack }}>Country</Text>
                        <Text style={{ fontSize: 14, padding: 10, color: '#101E8E', fontFamily: FONTS.AvenirBlack }}>
                            {HealthWorkerProfileData && HealthWorkerProfileData.Country}
                        </Text></View>
                </View>
                <TouchableOpacity style={{ }} onPress={async () => {
                    signOut();
                }}>
                    <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 18, fontWeight: 'bold', color: '#101E8E', fontFamily: FONTS.AvenirBlack, paddingTop: 10 }}>
                        Log Out
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 50,
        justifyContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    MainContainer: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white',
    },

});
