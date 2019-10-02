const getPosts = (posts) => {
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
    const blogData = addRatings(posts)
    return blogData.sort((a, b) => b.ratings - a.ratings)
}

export default getPosts