import createElement from './createElement'
import render from './render'

function RenderService() {}

RenderService.prototype = {
    createElement(arg) {
    	return createElement(arg)
	},
    render(arg) {
        return render(arg)
    }
}

export default RenderService