import { CreateItemInterface, ComponentDataInterface } from './Renderable.interface'

export const createElement = (item: CreateItemInterface): void | object => {
	const { componentData: { tag, className }, callback, parentComponent } = item
	const Component: ComponentDataInterface = document.createElement(tag)
	Component.className = className
	if (callback) callback(Component)
	if (parentComponent) parentComponent.appendChild(Component)
	if (tag === 'div') return Component
}