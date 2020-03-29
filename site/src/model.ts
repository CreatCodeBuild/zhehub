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
