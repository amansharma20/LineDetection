/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PatientDetails from '../screens/patientdetails/PatientDetails';
import AddressDetails from '../screens/patientdetails/AddressDetails';
import CriteriaScreen from '../screens/CriteriaScreen';
import BufferSolutionInstructions from '../screens/BufferSolutionInstructions';
import TestStripInstructions from '../screens/TestStripInstructions';
import InstructionsScreen from '../screens/InstructionsScreen';
import TimerScreen from '../screens/TimerScreen';
import ResultInstruction from '../screens/ResultInstruction';
import CassetteScan from '../screens/CassetteScan';
import ResultSymptoms from '../screens/ResultSymptoms';
import PatientInformation from '../screens/PatientInformation';
import SymptomsScreen from '../screens/SymptomsScreen';
import ClinicalInformation from '../screens/ClinicalInformation';
import Counselling from '../screens/Counselling';
import HelpScreen from '../screens/HelpScreen';
import SearchPatient from '../screens/SearchPatient';
import SearchResult from '../screens/SearchResult';
import PatientReport from '../screens/PatientReport';
import Profile from '../screens/Profile';
import TestSummary from '../screens/TestSummary';
import PreTreatmentInstructions from '../screens/PreTreatmentInstructions';
import ModuleInstructions from '../screens/ModuleInstructions';
import ResetPassword from '../screens/ResetPassword';
import NewPassword from '../screens/NewPassword';
import OTPScreen from '../screens/OTPScreen';
import DummyImageScreen from '../screens/DummyImageScreen';
import ManualResultScreen from '../screens/ManualResultScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="PatientDetails" component={PatientDetails} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cassette" component={CassetteScan} />
      <Stack.Screen name="ResultInstruction" component={ResultInstruction} />
      <Stack.Screen name="DummyImageScreen" component={DummyImageScreen} />
      <Stack.Screen name="Reset" component={ResetPassword} />
      <Stack.Screen name="Criteria" component={CriteriaScreen} />
      <Stack.Screen name="AddressPage" component={AddressDetails} />
      <Stack.Screen name="Instruction" component={InstructionsScreen} />
      <Stack.Screen name="Buffer" component={BufferSolutionInstructions} />
      <Stack.Screen name="TestStrip" component={TestStripInstructions} />
      <Stack.Screen name="StopWatch" component={TimerScreen} />
      <Stack.Screen name="Result" component={ResultSymptoms} />
      <Stack.Screen name="Information" component={PatientInformation} />
      <Stack.Screen name="Symptoms" component={SymptomsScreen} />
      <Stack.Screen name="ClinicalInformation" component={ClinicalInformation} />
      <Stack.Screen name="Counselling" component={Counselling} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="SearchPatient" component={SearchPatient} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="ManualResultScreen" component={ManualResultScreen} />
      <Stack.Screen name="Report" component={PatientReport} />
      <Stack.Screen name="Summary" component={TestSummary} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Module" component={ModuleInstructions} />
      <Stack.Screen name="PreTreatment" component={PreTreatmentInstructions} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="CassetteScan" component={CassetteScan} />
    </Stack.Navigator>
  );
}
