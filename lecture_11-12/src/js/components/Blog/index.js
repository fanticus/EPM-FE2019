import Blog from './Blog'

export default () => {
    const BlogConstructor = new Blog()
    BlogConstructor.getData()
    BlogConstructor.render()
    BlogConstructor.render()
}
