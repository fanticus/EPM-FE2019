import { ApiService as apiObject } from '../../services'
import Blog from './Blog'

export default () => {
    const { ApiService, config } = apiObject
    const { posts } = config.url
    const Api = new ApiService()
    Api.getData(posts)
        .then(postsArr => Blog.render(postsArr))
        .catch(error => {
            throw new Error(error)
        })
}
