const render = ({ tag, className }) => {
    const Component = document.createElement(tag)
    Component.className = className
    return Component
}