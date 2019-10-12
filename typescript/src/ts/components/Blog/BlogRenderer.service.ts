import { RenderService } from '../../services'
import { PostDataInterface, BlogPostDataInterface } from './BlogRenderer.interface'
import getPosts from './getPosts'
import render from './render'

class BlogRenderer extends RenderService {

    getPosts(posts: Array<PostDataInterface>): Array<BlogPostDataInterface> {
        if (!posts.length) throw 'No posts'
        return getPosts(posts)
    }
    render(arr: Array<BlogPostDataInterface>): void {
        render(arr.slice(0, 3), this.createElement)
    }
}

export default new BlogRenderer()