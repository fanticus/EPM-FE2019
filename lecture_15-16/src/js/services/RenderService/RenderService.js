import createElement from './createElement'
import render from './render'

class RenderService {
    createElement(arg) {
    	return createElement(arg)
	}
    render(arg) {
        return render(arg)
    }
}

export default RenderService