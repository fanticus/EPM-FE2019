import { AbstractRenderer } from './Render.abstract'
import { RenderItemInterface, CreateItemInterface } from './Render.interface'
import { createElement } from './createElement'

export default class RenderService implements AbstractRenderer {
    createElement(item: CreateItemInterface): object | void {
        return createElement(item)
    }
    render(arr: Array<any>): void {
        throw new Error('Method not exist.')
    }
}