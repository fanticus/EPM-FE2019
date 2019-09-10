function ConstructorRender () {
    this.createElement = ({ componentData, callback, parentComponent }) => {
        const { tag, className } = componentData
        const Component = document.createElement(tag)
        Component.className = className
        if (callback) callback(Component)
        if (parentComponent) parentComponent.appendChild(Component)
        if (tag === 'div') return Component
    }
}

const RenderService = new ConstructorRender()

export default RenderService