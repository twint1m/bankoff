import { BaseScreen } from '../../BaseScreen/base-screen.component.js'

export class About extends BaseScreen{
	constructor() {
		super('About Us')
	}
	render(){
		return '<h1>about</h1>'
	}
}