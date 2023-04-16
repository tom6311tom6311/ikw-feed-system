import { gql } from '@apollo/client';

const GetSitesQuery = gql`
  query GetSites {
    sites {
      siteId
      status
      nameChin
      companyNameChin
      county
      district
    }
  }
`;

export default GetSitesQuery;
