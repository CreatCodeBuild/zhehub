import { IssuesNode } from './issue';

export interface Issue {
    id: string
    title: string
    body: string
    comments: Comment[]
}

interface Comment {
    author: Author
    body: string
}

interface Author {
    name: string | null
}

export function mapIssuesNodeToIssue(node: IssuesNode): Issue {
    return {
        id: node.id,
        title: node.title,
        body: node.body,
        comments: node.comments.nodes
    }
}
