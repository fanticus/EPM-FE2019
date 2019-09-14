import config from './config'

function Api() {}

Api.prototype = {
    async getPosts() {
        try {
            const { posts } = config.url
            const ResPosts = await fetch(posts)
            return await ResPosts.json()
        } catch(error) {
            console.log(`ERROR getPosts: ${error}`)
            return []
        }
    }
}

export default Api