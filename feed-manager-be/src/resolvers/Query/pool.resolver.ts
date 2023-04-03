import { GraphQLYogaError } from '@graphql-yoga/node';
import mockData from '../../../data/mockData';
import { QueryResolvers } from '../../generated/graphql';

type PoolResolver = QueryResolvers['pool'];

const pool: PoolResolver = (parent, { poolId }, { claims }) => {
  if (claims === null) {
    throw new GraphQLYogaError("Authentication failed", { code: 401 });
  }
  return mockData.pools[poolId] || null;
};

export default pool;
