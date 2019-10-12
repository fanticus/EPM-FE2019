interface ComponentDataInterface {
    tag?: string,
    className?: string
}

interface CreateItemInterface {
    componentData: ComponentDataInterface,
    callback?: (item: object) => object | null,
    parentComponent?: { appendChild: (child: object) => object } | null
}

export { CreateItemInterface, ComponentDataInterface }
