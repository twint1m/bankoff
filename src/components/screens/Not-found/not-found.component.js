import { BaseScreen } from '../../BaseScreen/base-screen.component.js'

export class NotFound extends BaseScreen{
	constructor() {
		super('Not Found')
	}

	render(){
		return '<h1>Not found</h1>'
	}
}