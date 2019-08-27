import getBlogData from './getBlogData'
import renderBlogContent from './renderBlog'
const BlogFunc = () => {
    const BlogDataArr = getBlogData()
    const BlogContainerElement = document.getElementById('blogContainer')
    renderBlogContent(BlogDataArr, BlogContainerElement)
}
export default BlogFunc
