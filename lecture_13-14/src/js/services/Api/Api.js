import config from './config'

function Api() {}

Api.prototype = {
    async getPosts() {
        try {
            const { posts } = config.url
            const resPosts = await fetch(posts)
            return await resPosts.json()
        } catch(error) {
            console.log(`ERROR getPosts: ${error}`)
            return []
        }
    }
}

export default Api