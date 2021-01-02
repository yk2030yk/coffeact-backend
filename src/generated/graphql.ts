import { GraphQLResolveInfo } from 'graphql';
import { CustomContext } from '../types/context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IArticle = {
  __typename?: 'Article';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  eyecatchImage?: Maybe<Scalars['String']>;
  publishStatus?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type IArticleList = {
  __typename?: 'ArticleList';
  list?: Maybe<Array<Maybe<IArticle>>>;
  lastKey?: Maybe<Scalars['String']>;
};

export type IQuery = {
  __typename?: 'Query';
  articleList?: Maybe<IArticleList>;
};


export type IQueryArticleListArgs = {
  lastKey?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
export type IResolversTypes = ResolversObject<{
  Article: ResolverTypeWrapper<Partial<IArticle>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  ArticleList: ResolverTypeWrapper<Partial<IArticleList>>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = ResolversObject<{
  Article: Partial<IArticle>;
  String: Partial<Scalars['String']>;
  ArticleList: Partial<IArticleList>;
  Query: {};
  Int: Partial<Scalars['Int']>;
  Boolean: Partial<Scalars['Boolean']>;
}>;

export type IArticleResolvers<ContextType = CustomContext, ParentType extends IResolversParentTypes['Article'] = IResolversParentTypes['Article']> = ResolversObject<{
  title?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  eyecatchImage?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  publishStatus?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IArticleListResolvers<ContextType = CustomContext, ParentType extends IResolversParentTypes['ArticleList'] = IResolversParentTypes['ArticleList']> = ResolversObject<{
  list?: Resolver<Maybe<Array<Maybe<IResolversTypes['Article']>>>, ParentType, ContextType>;
  lastKey?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IQueryResolvers<ContextType = CustomContext, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = ResolversObject<{
  articleList?: Resolver<Maybe<IResolversTypes['ArticleList']>, ParentType, ContextType, RequireFields<IQueryArticleListArgs, never>>;
}>;

export type IResolvers<ContextType = CustomContext> = ResolversObject<{
  Article?: IArticleResolvers<ContextType>;
  ArticleList?: IArticleListResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
}>;


