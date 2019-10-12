import { RenderItemInterface } from './Render.interface'

export abstract class AbstractRenderer {
    abstract render(arr: Array<RenderItemInterface>): void
}