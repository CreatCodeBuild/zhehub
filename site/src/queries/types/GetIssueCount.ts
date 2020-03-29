/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIssueCount
// ====================================================

export interface GetIssueCount_repository_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetIssueCount_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: GetIssueCount_repository_issues;
}

export interface GetIssueCount {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GetIssueCount_repository | null;
}
