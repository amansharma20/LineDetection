/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLMutation = {
  ADD_Patient_DETAILS: gql`
  mutation MyMutation {$VillageName: String!, $Street: String!, $PostOffice: String!, $MobileNumber: Int!, $Pincode: Int!, $LastName: String!, $IndianState: String!, $HouseNo: Int!, $GuardianRelationshipWithPatient: String!, $GuardianName: String!, $GuardianIdNumber: Int!, $GuardianIdAvailable: String!, $Gender: String!, $FirstName:String!, $District: String!, $Co: String!, $Area: String!, $AadharNumber: Int!, $AadharAvailable: String!, $DateOfBirth:  DateTime!
    AddPatientMutation {
      AddPatientDetail(VillageName: $VillageName, Street: $Street, PostOffice: $PostOffice, MobileNumber: $MobileNumber, Pincode: $Pincode, LastName: $LastName, IndianState: $IndianState, HouseNo:$HouseNo, GuardianRelationshipWithPatient: $GuardianRelationshipWithPatient, GuardianName: $GuardianName, GuardianIdNumber: $GuardianIdNumber, GuardianIdAvailable: $GuardianIdAvailable, Gender: $Gender, FirstName: $FirstName, District: $District, Co:$Co, Area: $Area, AadharNumber: $AadharNumber, AadharAvailable: $AadharAvailable, DateOfBirth: $DateOfBirth)
    }
  }
  `,
  ADD_SickleScan_Test: gql`
  mutation MyMutation {$PatientId:Int!, $SickleScanTestResult: String!, $TestImageStoragePath: ""
    AddSickleScanTestMutation {
      AddTestForPatient(PatientId: $PatientId, SickleScanTestResult: $SickleScanTestResult, TestImageStoragePath: $TestImageStoragePath)
    }
}
}
`
};
