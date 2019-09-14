import { RenderService, Api } from "../../services"
import getData from './getData'
import render from './render'

function Blog () {}

Blog.prototype = {
    async getData() {
        return await getData(this.getPosts)
    },
    render() {
        this.getData().then(posts => render(posts.slice(0, 3), this.createElement))
    }
}

Object.setPrototypeOf(Blog.prototype, Api.prototype)
Object.setPrototypeOf(Blog.prototype.__proto__, RenderService.prototype)

export default Blog
