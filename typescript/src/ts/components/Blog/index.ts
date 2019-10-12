import { Request as requestObject } from '../../services'
import Blog from './Blog.service'
import { PostDataInterface } from './Blog.interface'

export default (): void => {
    const { Request, config } = requestObject
    const { posts } = config.url
    const Api = new Request()
    Api.getData(posts)
        .then((postsArr: Array<PostDataInterface>) => {
            const newPostsArr = Blog.getPosts(postsArr)
            Blog.render(newPostsArr)
        })
        .catch(error => {
            throw new Error(error)
        })
}
