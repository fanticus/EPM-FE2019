import Blog from './Blog'

export default () => {
    const BlogConstructor = new Blog()
    BlogConstructor.getPosts()
    BlogConstructor.render()
    BlogConstructor.render()
}
