import pool from './Query/pool.resolver';
import site from './Query/site.resolver';
import sites from './Query/sites.resolver';
import login from './Mutation/login.resolver';
import logout from './Mutation/logout.resolver';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Query: {
    pool,
    site,
    sites,
  },
  Mutation: {
    login,
    logout,
  }
};

export default resolvers;
