import { BaseScreen } from '../../BaseScreen/base-screen.component.js'

export class Home extends BaseScreen{
	constructor() {
		super('Home')
	}
	render(){
		return '<h1>Home</h1>'
	}
}