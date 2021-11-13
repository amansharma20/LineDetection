/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import HelpScreen from '../screens/HelpScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ResetPassword from '../screens/ResetPassword';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="Help" component={HelpScreen} />
        
            
           
        </Stack.Navigator>
    );
}

