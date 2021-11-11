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
        ApplicationUserId
        Code
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
  `
};




