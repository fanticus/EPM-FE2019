interface BlogPostDataInterface {
    id?: number,
    title?: string | null,
    src?: string | null,
    date?: string | null,
    description?: string | null,
    ratings?: number,
    topics?: Array<string> | null
}

interface PostDataInterface {
    id: number,
    title?: string | null,
    src?: string | null,
    date?: string | null,
    description?: string | null,
    ratings: Array<number>,
    topics?: Array<string> | null
}

interface ComponentInterface {
    src?: string,
    alt?: string,
    value?: string,
    tag?: string,
    className?: string,
    innerHTML?: string,
    tabindex?: string,
    id?: string
}

export { PostDataInterface, BlogPostDataInterface, ComponentInterface }