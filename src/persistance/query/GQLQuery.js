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

  SEARCH_PATIENT_RECORD: gql`
      query MyQuery ($AadharNumber: String!, $UniqueID: String!){
          SearchPatientQuery {
            GetPatientBySearch(AadharNumber: $AadharNumber, UniqueID: $UniqueID) {
              Id
              FullName
              DateOfBirth
              UniqueID
            }
          }
        }`,
  SEARCH_SICKLE_TEST_RECORD: gql`
  query MyQuery($PatientId: Long!) {
      PatientTestReportQuery {
        GetTestReportByPatientId(PatientId: $PatientId){
          Patient {
            FullName
            DateOfBirth
            GuardianIdNumber
            MobileNumber
            City
            Country
            District
            HouseNumber
            Pincode
            State
            StreetRoadLane
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




