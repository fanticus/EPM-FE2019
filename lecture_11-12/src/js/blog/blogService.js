import RenderService from "../services/renderService"
import getData from './getData'

function ConstructorBlog () {
    this.data = []
}

ConstructorBlog.prototype = {
    getData: function () {
        this.data = getData().slice(0, 3)
    },
    createComponent: function (arr) {
        const getImage = ({ componentData, parentComponent }) => {
            const { src, title } = componentData
            const callback = (component) => {
                component.src = src
                component.alt = title
                return component
            }

            const ImageContainer = this.createElement({
                componentData: { tag: 'div', className: 'list__item__image' },
                parentComponent
            })
            this.createElement({
                componentData: { tag: 'img', className: 'blog__preview' },
                callback,
                parentComponent: ImageContainer
            })

            return ImageContainer
        }
        const getDescriptionContainer = ({ componentData, parentComponent }) => {
            const { title, ratings, topics, date, description } = componentData
            const IsCheckTopics = topics.length !== 0
            const IsCheckRatings = ratings.length !== 0
            let classHeightContainer = 'blog__no__topics'

            const getComponentLabel = ({ componentData, parentComponent }) => {
                const { value, tag, className } = componentData
                const callback = (component) => {
                    component.innerHTML = value
                    return component
                }

                this.createElement({
                    componentData: { tag, className },
                    callback,
                    parentComponent
                })
            }

            if (IsCheckTopics) classHeightContainer = ''
            const descriptionContainer = this.createElement({
                componentData: { tag: 'div', className: `list__item__description blog__container__description ${classHeightContainer}` },
                parentComponent
            })

            getComponentLabel({
                componentData: {
                    value: title,
                    tag: 'h4',
                    className: 'item__title blog__title'
                },
                parentComponent: descriptionContainer
            })
            getComponentLabel({
                componentData: {
                    value: date,
                    tag: 'p',
                    className: 'blog__date'
                },
                parentComponent: descriptionContainer
            })
            getComponentLabel({
                componentData: {
                    value: description,
                    tag: 'p',
                    className: 'item__description blog__description'
                },
                parentComponent: descriptionContainer
            })
            if (IsCheckTopics) getComponentLabel({
                componentData: {
                    value: topics.join(', '),
                    tag: 'p',
                    className: 'blog__topic'
                },
                parentComponent: descriptionContainer
            })
            if (IsCheckRatings) getComponentLabel({
                componentData: {
                    value: `Rating: ${ratings}`,
                    tag: 'p',
                    className: 'blog__rating'
                },
                parentComponent: descriptionContainer
            })
            getComponentLabel({
                componentData: {
                    value: 'read more',
                    tag: 'button',
                    className: 'btn btn--middle item__btn blog__btn'
                },
                parentComponent: descriptionContainer
            })
        }
        const blogContainer = this.createElement({
            componentData: { tag: 'div', className: 'row list blog__container' },
            parentComponent: document.getElementById('blog')
        })
        const getItem = (blogObj) => {
            const { id, title, ratings, topics, src, date, description } = blogObj
            const callback = (component) => {
                component.tabindex = '0'
                component.id = String(id)
                return component
            }

            const blogItem = this.createElement({
                componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },
                callback,
                parentComponent: blogContainer
            })

            getImage({ componentData: { src, title }, parentComponent: blogItem })
            getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem })
        }

        this.data.forEach((blogObj, index) => {
            const NewBlogObj  = {
                ...blogObj,
                date: '15 Jan, 2015',
                description: 'Lorem ipsum dolor sit amet, con­sectetur adipiscing elit. Pellen­tesque vel odio vel felis placerat pharetra ut vitae felis.',
                src: `./images/image${++index}.jpg`
            }
            getItem(NewBlogObj)
        })
    }
}

const BlogService = new ConstructorBlog()

ConstructorBlog.prototype = Object.assign(BlogService, RenderService)

export default BlogService
