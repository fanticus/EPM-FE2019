const getData = async (func) => {
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
}

export default getData