/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLQuery = {
  GET_PROFILE: gql`
    query MyQuery {
        HealthWorkerUserQuery {
        GetHealthWorkerUserDetails {
        Address
        ApplicationUser {
        Email
        PhoneNumber
        UserName
        }
        Country
        CreatedDateTimeUtc
        Department
        FirstName
        LastName
        Organization
        PinCode
        State
        UpdatedDateTimeUtc
        }
        }
        }
  `,

  // SEARCH_PATIENT_RECORD: gql`
  //     query MyQuery ($AadharNumber: String!, $UniqueID: String!, MobileNumber: String!, GuardianIDNumber: String!){
  //         SearchPatientQuery {
  //           GetPatientBySearch(AadharNumber: $AadharNumber, UniqueID: $UniqueID, MobileNumber: $MobileNumber, GuardianIDNumber: $GuardianIDNumber ) {
  //             FullName
  //             AadharNumber
  //             Gender
  //             DateOfBirth
  //           }
  //         }
  //       }`,


  SEARCH_SICKLE_TEST_RECORD: gql`
  query MyQuery($PatientId: Long!) {
      PatientTestReportQuery {
        GetTestReportByPatientId(PatientId: $PatientId){
          Patient {
            FullName
            DateOfBirth
            MobileNumber
            City
            Country
            District
            HouseNumber
            PinCode
            State
            Street
            }
            SickleScanTestResult
            HealthWorkerUser {
            FirstName
            LastName
            }
            CreatedDateTimeUtc
        }
      }
    }`
};




