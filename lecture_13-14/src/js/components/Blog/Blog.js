import { RenderService, Api } from "../../services"
import getPosts from './getPosts'
import render from './render'

function Blog () {}

Blog.prototype = {
    async getPosts() {
        return getPosts(this.getPosts())
    },
    render() {
        this.getPosts().then(posts => render(posts, this.createElement))
    }
}

Object.setPrototypeOf(Blog.prototype, RenderService.prototype)
Object.setPrototypeOf(Blog.prototype, Api.prototype)

export default Blog
