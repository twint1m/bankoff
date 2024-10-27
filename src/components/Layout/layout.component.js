export class Layout {
	constructor({screen, router}) {
		this.screen = screen
		this.router = router
	}

	render () {
		const header = `
		<header>
		header
			<nav>
				<a href="/">home</a>
				<a href="/about">about</a>
				<a href="/404">404</a>
			</nav>
		</header>
`
		return `
		${header}
		<main>${this.screen}</main>
		`
	}
}