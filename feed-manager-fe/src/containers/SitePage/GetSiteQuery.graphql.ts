import { gql } from '@apollo/client';

const GetSiteQuery = gql`
  query GetSite($siteId: ID!) {
    site(siteId: $siteId) {
      siteId
      status
      nameChin
      pools {
        poolId
        poolName
        status
        imageUrl
      }
    }
  }
`;

export default GetSiteQuery;
