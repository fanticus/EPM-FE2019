const render = (arr, func) => {

    const getImage = ({ componentData, parentComponent }) => {
        const { src, title } = componentData
        const callback = (component) => {
            component.src = src
            component.alt = title
            return component
        }

        const ImageContainer = func({
            componentData: { tag: 'div', className: 'list__item__image' },
            parentComponent
        })
        func({
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

            func({
                componentData: { tag, className },
                callback,
                parentComponent
            })
        }

        if (IsCheckTopics) classHeightContainer = ''
        const descriptionContainer = func({
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
    const blogContainer = func({
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

        const blogItem = func({
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