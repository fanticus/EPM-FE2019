const getData = () => {
    const getBlogDataArr = () => {
        const LengthBlogArray = 30
        const BlogData =  Array(LengthBlogArray).fill().map((itemBlog, index) => {
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
        return BlogData.sort((a, b) => {
            if (a.ratings < b.ratings) return 1
            if (a.ratings > b.ratings) return -1
            return 0
        })
    }
    const getRatings = () => {
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

    return getBlogDataArr()
}

export default getData