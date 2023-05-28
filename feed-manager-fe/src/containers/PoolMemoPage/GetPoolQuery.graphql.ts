import { gql } from '@apollo/client';

const GetPoolQuery = gql`
  query GetPool($poolId: ID!) {
    pool(poolId: $poolId) {
      poolId
      poolName
      status
      capacity
      speciesList
      cameras {
        cameraId
        cameraName
      }
    }
  }
`;

export default GetPoolQuery;
