import { RenderService } from '../../services'
import getPosts from './getPosts'
import render from './render'

class Blog extends RenderService {
    getPosts(posts) {
        return getPosts(posts)
    }
    render(arr) {
        if (!arr.length) throw 'No posts'
        const newPostsArr = this.getPosts(arr)
        render(newPostsArr.slice(0, 3), this.createElement)
    }
}

export default new Blog()
