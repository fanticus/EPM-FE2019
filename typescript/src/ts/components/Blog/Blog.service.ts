import { Renderable } from '../../services'
import { PostDataInterface, BlogPostDataInterface } from './Blog.interface'
import getPosts from './getPosts'
import render from './render'

class BlogRenderer extends Renderable {

    getPosts(posts: Array<PostDataInterface>): Array<BlogPostDataInterface> {
        return getPosts(posts)
    }
    render(arr: Array<BlogPostDataInterface>): void {
        render(arr.slice(0, 3), this.createElement)
    }
}

export default new BlogRenderer()