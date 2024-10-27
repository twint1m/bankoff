export class BaseScreen {
	constructor(title = 'Online Bank') {
		this.title = title
		this.currentTitle = document.title
		this.#setPageTitle()
	}

	#setPageTitle() {
		document.title = `${this.currentTitle} | ${this.title}`
	}
}