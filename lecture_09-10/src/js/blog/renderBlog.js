const renderBlogContent = (arr, component) => {

    const renderBlogItems = (arr) => {
        const NewArr = arr.slice(0, 3)
        NewArr.forEach((blogObj, index) => {
            component.append(getBlogItem(blogObj, `./images/image${++index}.jpg`))
        })
    }

    const getBlogItem = (item, imageSrc) => {
        const blogItem = document.createElement('div')
        const { id, title, ratings, topics } = item

        blogItem.className = 'col-12 col-sm-6 col-md-4 list__item blog__item'
        blogItem.tabindex = '0'
        blogItem.id = String(id)
        blogItem.appendChild(getImageContainer(imageSrc, title))
        blogItem.appendChild(getDescriptionContainer(title, ratings, topics))
        return blogItem
    }

    const getImageContainer = (imageSrc, title) => {
        const imageContainer = document.createElement('div')
        const getBlogImage = (imageSrc, title) => {
            const imageComponent = document.createElement('img')
            imageComponent.className = 'blog__preview'
            imageComponent.src = imageSrc
            imageComponent.alt = title
            return imageComponent
        }
        imageContainer.appendChild(getBlogImage(imageSrc, title))
        imageContainer.className = 'list__item__image'
        return imageContainer
    }

    const getDescriptionContainer = (title, ratings, topics) => {
        const IsCheckTopics = topics.length !== 0
        const IsCheckRatings = ratings.length !== 0
        let classHeightContainer = 'blog__no__topics'
        const descriptionContainer = document.createElement('div')
        const date = '15 Jan, 2015'
        const description = 'Lorem ipsum dolor sit amet, con­sectetur adipiscing elit. Pellen­tesque vel odio vel felis placerat pharetra ut vitae felis.'

        const getBlogTitle = (title) => {
            const titleComponent = document.createElement('h4')
            titleComponent.className = 'item__title blog__title'
            titleComponent.innerHTML = title
            return titleComponent
        }

        const getBlogDate = (date) => {
            const dateComponent = document.createElement('p')
            dateComponent.className = 'blog__date'
            dateComponent.innerHTML = date
            return dateComponent
        }

        const getBlogDescription = (text) => {
            const textComponent = document.createElement('p')
            textComponent.className = 'item__description blog__description'
            textComponent.innerHTML = text
            return textComponent
        }

        const getBlogTopics = (topics) => {
            const topicsComponent = document.createElement('p')
            topicsComponent.className = 'blog__topic'
            topicsComponent.innerHTML = topics.join(', ')
            return topicsComponent
        }

        const getBlogRating = (ratings) => {
            const ratingComponent = document.createElement('p')
            ratingComponent.className = 'blog__rating'
            ratingComponent.innerHTML = `Rating: ${ratings}`
            return ratingComponent
        }

        const getBlogButton = () => {
            const buttonComponent = document.createElement('button')
            buttonComponent.className = 'btn btn--middle item__btn blog__btn'
            buttonComponent.innerHTML = 'read more'
            return buttonComponent
        }

        descriptionContainer.appendChild(getBlogTitle(title))
        descriptionContainer.appendChild(getBlogDate(date))
        descriptionContainer.appendChild(getBlogDescription(description))
        if (IsCheckTopics) descriptionContainer.appendChild(getBlogTopics(topics))
        if (IsCheckRatings) descriptionContainer.appendChild(getBlogRating(ratings))
        descriptionContainer.appendChild(getBlogButton())
        if (IsCheckTopics) classHeightContainer = ''
        descriptionContainer.className = `list__item__description blog__container__description ${classHeightContainer}`
        return descriptionContainer
    }

    renderBlogItems(arr)
}

export default renderBlogContent
