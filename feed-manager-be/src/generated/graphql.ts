import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Scalars['String']>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Pool = {
  __typename?: 'Pool';
  capacity?: Maybe<Scalars['Float']>;
  imageUrl: Scalars['String'];
  poolId: Scalars['String'];
  poolName: Scalars['String'];
  speciesList: Array<Scalars['String']>;
  status: PoolStatus;
};

export enum PoolStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Query = {
  __typename?: 'Query';
  pool?: Maybe<Pool>;
  site?: Maybe<Site>;
  sites: Array<Site>;
};


export type QueryPoolArgs = {
  poolId: Scalars['ID'];
};


export type QuerySiteArgs = {
  siteId: Scalars['ID'];
};

export type Site = {
  __typename?: 'Site';
  addressChin: Scalars['String'];
  addressEng: Scalars['String'];
  companyNameChin?: Maybe<Scalars['String']>;
  companyNameEng?: Maybe<Scalars['String']>;
  county: Scalars['String'];
  district: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  licenseNum?: Maybe<Scalars['String']>;
  nameChin: Scalars['String'];
  nameEng: Scalars['String'];
  owners: Array<User>;
  pools: Array<Pool>;
  siteId: Scalars['ID'];
  status: SiteStatus;
  telCompany?: Maybe<Scalars['String']>;
  telHouse?: Maybe<Scalars['String']>;
  telMobile?: Maybe<Scalars['String']>;
  validationStatus: SiteValidationStatus;
};

export enum SiteStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum SiteValidationStatus {
  New = 'NEW',
  Passed = 'PASSED',
  Rejected = 'REJECTED',
  UnderReview = 'UNDER_REVIEW'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  nameChin: Scalars['String'];
  nameEng: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Pool: ResolverTypeWrapper<Pool>;
  PoolStatus: PoolStatus;
  Query: ResolverTypeWrapper<{}>;
  Site: ResolverTypeWrapper<Site>;
  SiteStatus: SiteStatus;
  SiteValidationStatus: SiteValidationStatus;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Mutation: {};
  Pool: Pool;
  Query: {};
  Site: Site;
  String: Scalars['String'];
  User: User;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type PoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = {
  capacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poolName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  speciesList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PoolStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QueryPoolArgs, 'poolId'>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<QuerySiteArgs, 'siteId'>>;
  sites?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  addressChin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressEng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyNameChin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyNameEng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  county?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  district?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenseNum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameChin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameEng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SiteStatus'], ParentType, ContextType>;
  telCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telHouse?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telMobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  validationStatus?: Resolver<ResolversTypes['SiteValidationStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameChin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameEng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

