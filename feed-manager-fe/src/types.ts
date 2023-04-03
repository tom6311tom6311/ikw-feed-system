export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
