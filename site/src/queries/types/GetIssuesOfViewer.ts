/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIssuesOfViewer
// ====================================================

export interface GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author_EnterpriseUserAccount {
  __typename: "EnterpriseUserAccount" | "Organization" | "Mannequin" | "Bot";
}

export interface GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
}

export type GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author = GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author_EnterpriseUserAccount | GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author_User;

export interface GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes {
  __typename: "IssueComment";
  /**
   * The actor who authored the comment.
   */
  author: GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes_author | null;
  /**
   * The body as Markdown.
   */
  body: string;
}

export interface GetIssuesOfViewer_viewer_repository_issues_nodes_comments {
  __typename: "IssueCommentConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetIssuesOfViewer_viewer_repository_issues_nodes_comments_nodes | null)[] | null;
}

export interface GetIssuesOfViewer_viewer_repository_issues_nodes {
  __typename: "Issue";
  id: string;
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * Identifies the body of the issue.
   */
  body: string;
  /**
   * A list of comments associated with the Issue.
   */
  comments: GetIssuesOfViewer_viewer_repository_issues_nodes_comments;
}

export interface GetIssuesOfViewer_viewer_repository_issues {
  __typename: "IssueConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetIssuesOfViewer_viewer_repository_issues_nodes | null)[] | null;
}

export interface GetIssuesOfViewer_viewer_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: GetIssuesOfViewer_viewer_repository_issues;
}

export interface GetIssuesOfViewer_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * Find Repository.
   */
  repository: GetIssuesOfViewer_viewer_repository | null;
}

export interface GetIssuesOfViewer {
  /**
   * The currently authenticated user.
   */
  viewer: GetIssuesOfViewer_viewer;
}
