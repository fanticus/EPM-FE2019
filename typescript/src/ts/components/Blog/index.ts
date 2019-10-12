import { ApiService as apiObject } from '../../services'
import BlogRenderer from './BlogRenderer.service'
import { PostDataInterface } from './BlogRenderer.interface'

export default (): void => {
    const { ApiService, config } = apiObject
    const { posts } = config.url
    const Api = new ApiService()
    Api.getData(posts)
        .then((postsArr: Array<PostDataInterface>) => {
            const newPostsArr = BlogRenderer.getPosts(postsArr)
            BlogRenderer.render(newPostsArr)
        })
        .catch(error => {
            throw new Error(error)
        })
}
