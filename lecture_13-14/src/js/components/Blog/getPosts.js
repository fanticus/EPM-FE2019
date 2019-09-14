const getPosts = async (data, func) => {
    const addRatings = (arr) => {
        return arr.map(postObj => {
            const { ratings } = postObj
            return {
                ...postObj,
                ratings: getAverage(ratings),
            }
        })
    }
    const getAverage = (arr) => {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    }

    const Posts = await func()
    if (!Posts.length) throw new Error('No posts')
    const BlogData = addRatings(Posts)
    return BlogData.sort((a, b) => b.ratings - a.ratings)
    /*const getRatings = () => {
        const LengthRatingsArray = 10
        return Array(LengthRatingsArray).fill().map(() => {
            return getRandomInt(1, 1000)
        })
    }
    const getTopics = () => {
        const LengthTopicsArray = getRandomInt(1, 20)
        return Array(LengthTopicsArray).fill().map(() => {
            const NumTopic = getRandomInt(1, 1000)
            return `#topic${NumTopic}`
        })
    }
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
    const getAverage = (arr) => Math.floor(arr.reduce((a, b) => a + b) / arr.length)

    const LengthBlogArray = 30
    const BlogData = Array(LengthBlogArray).fill().map((itemBlog, index) => {
        const id = `${++index}`
        const title = `Title${id}`
        const ratings = getAverage(getRatings())
        const topics = getTopics()
        return {
            id,
            ratings,
            topics,
            title
        }
    })

    return BlogData.sort((a, b) => b.ratings - a.ratings)*/
}

export default getPosts