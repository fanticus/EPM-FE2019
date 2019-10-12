import { BlogPostDataInterface, ComponentInterface } from './BlogRenderer.interface'

const render = (arr: Array<BlogPostDataInterface>, createFunc: (item: object) => object | void) => {
    const blogContainer = createFunc({
        componentData: { tag: 'div', className: 'row list blog__container' },
        parentComponent: document.getElementById('blog')
    })
    const getImage = (componentObj: {
        componentData: BlogPostDataInterface,
        parentComponent: object | void,
    }) => {
        const { componentData, parentComponent } = componentObj
        const { src, title } = componentData
        const callback = (component: ComponentInterface) => {
            component.src = src
            component.alt = title
            return component
        }

        const imageContainer = createFunc({
            componentData: { tag: 'div', className: 'list__item__image' },
            parentComponent
        })
        createFunc({
            componentData: { tag: 'img', className: 'blog__preview' },
            callback,
            parentComponent: imageContainer
        })

        return imageContainer
    }
    const getDescriptionContainer = (componentObj: {
        componentData: BlogPostDataInterface,
        parentComponent: object | void,
    }) => {
        const { componentData, parentComponent } = componentObj
        const { title, ratings, topics, date, description } = componentData
        const isCheckTopics = topics.length !== 0
        let classHeightContainer = 'blog__no__topics'

        const getComponentLabel = (componentObj: {
            componentData: ComponentInterface,
            parentComponent: object | void,
        }) => {
            const { componentData, parentComponent } = componentObj
            const { value, tag, className } = componentData
            const callback = (component: ComponentInterface) => {
                component.innerHTML = value
                return component
            }

            createFunc({
                componentData: { tag, className },
                callback,
                parentComponent
            })
        }

        if (isCheckTopics) classHeightContainer = ''
        const descriptionContainer = createFunc({
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
        if (isCheckTopics) getComponentLabel({
            componentData: {
                value: topics.join(', '),
                tag: 'p',
                className: 'blog__topic'
            },
            parentComponent: descriptionContainer
        })
        getComponentLabel({
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
    const getItem = (blogObj: BlogPostDataInterface) => {
        const { id, title, ratings, topics, src, date, description } = blogObj
        const callback = (component: ComponentInterface): object => {
            component.tabindex = '0'
            component.id = String(id)
            return component
        }

        const blogItem = createFunc({
            componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },
            callback,
            parentComponent: blogContainer
        })

        getImage({ componentData: { src, title }, parentComponent: blogItem })
        getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem })
    }

    arr.forEach(blogObj => getItem(blogObj))
}

export default render