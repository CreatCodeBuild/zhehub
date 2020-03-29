/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIssues
// ====================================================

export interface GetIssues_repository_issues_nodes_author_EnterpriseUserAccount {
  __typename: "EnterpriseUserAccount" | "Organization" | "Mannequin" | "Bot";
}

export interface GetIssues_repository_issues_nodes_author_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The HTTP URL for this user
   */
  url: any;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

export type GetIssues_repository_issues_nodes_author = GetIssues_repository_issues_nodes_author_EnterpriseUserAccount | GetIssues_repository_issues_nodes_author_User;

export interface GetIssues_repository_issues_nodes {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * The actor who authored the comment.
   */
  author: GetIssues_repository_issues_nodes_author | null;
}

export interface GetIssues_repository_issues_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetIssues_repository_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (GetIssues_repository_issues_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetIssues_repository_issues_pageInfo;
}

export interface GetIssues_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: GetIssues_repository_issues;
}

export interface GetIssues {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GetIssues_repository | null;
}

export interface GetIssuesVariables {
  pageSize: number;
}
