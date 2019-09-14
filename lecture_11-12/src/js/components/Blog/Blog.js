import { RenderService } from "../../services"
import getData from './getData'
import render from './render'

function Blog () {
    this.data = []
}

Blog.prototype = {
    getData() {
        this.data = getData().slice(0, 3)
    },
    render() {
        render(this.data, this.createElement)
    }
}

Object.setPrototypeOf(Blog.prototype, RenderService.prototype)

export default Blog
