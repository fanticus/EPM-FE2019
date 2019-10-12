import { RenderItemInterface } from './AbstractRenderer.interface'

export default abstract class AbstractRenderer {
    abstract render(arr: Array<RenderItemInterface>): void
}