import { PostDataInterface, BlogPostDataInterface } from './BlogRenderer.interface'

const getPosts = (posts: Array<PostDataInterface>) => {
    const addRatings = (arr: Array<PostDataInterface>) => {
        return arr.map((postObj) => {
            const { ratings } = postObj
            return {
                ...postObj,
                ratings: getAverage(ratings),
            }
        })
    }
    const getAverage = (arr: Array<number>) => {
        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
    }
    const blogData: Array<BlogPostDataInterface> = addRatings(posts)
    return blogData.sort((a, b) => b.ratings - a.ratings)
}

export default getPosts