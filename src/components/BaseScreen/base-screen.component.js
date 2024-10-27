export class BaseScreen {
	constructor(title = 'Online Bank') {
		document.title = ''
		this.title = title
		this.#setPageTitle()
	}

	#setPageTitle() {
		document.title = `Bankoff | ${this.title}`
	}
}