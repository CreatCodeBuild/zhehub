export interface IssueQueryResult {
    data: Data;
}

export interface Data {
    viewer: Viewer;
}

export interface Viewer {
    login:      string;
    repository: Repository;
}

export interface Repository {
    name:   string;
    issues: Issues;
}

export interface Issues {
    nodes: IssuesNode[];
}

export interface IssuesNode {
    id:       string;
    title:    string;
    body:     string;
    comments: Comments;
}

export interface Comments {
    nodes: CommentsNode[];
}

export interface CommentsNode {
    author: Author;
    body:   string;
}

export interface Author {
    name: null | string;
}
