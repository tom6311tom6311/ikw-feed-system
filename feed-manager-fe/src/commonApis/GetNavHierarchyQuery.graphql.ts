import { gql } from '@apollo/client';

const GetNavHierarchyQuery = gql`
  query GetNavHierarchy {
    sites {
      siteId
      pools {
        poolId
        poolName
      }
    }
  }
`;

export default GetNavHierarchyQuery;
