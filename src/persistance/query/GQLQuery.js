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
        Pincode
        State
        UpdatedDateTimeUtc
        }
        }
        }
  `,

  SEARCH_PATIENT_RECORD: gql`
      query MyQuery ($AadharNumber: String!, $UniqueId: String!){
          SearchPatientQuery {
            GetPatientBySearch(AadharNumber: $AadharNumber, UniqueId: $UniqueId) {
              Id
              FullName
              DateOfBirth
              UniqueId
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




