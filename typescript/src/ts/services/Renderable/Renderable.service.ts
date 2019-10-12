import AbstractRenderer from '../AbstractRenderer'
import { CreateItemInterface } from './Renderable.interface'
import { createElement } from './createElement'

export default class Renderable implements AbstractRenderer {
    createElement(item: CreateItemInterface): object | void {
        return createElement(item)
    }
    render(arr: Array<any>): void {
        throw new Error('Method not exist.')
    }
}