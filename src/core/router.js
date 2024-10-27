import { ROUTES } from './routes.data.js'
import { NotFound } from '../components/screens/Not-found/not-found.component.js'
import { Layout } from '../components/Layout/layout.component.js'

export class Router {
	#routes = ROUTES
	#currentUrl = null
	#layout = null

	constructor(url) {
		// событие перехода на предыдущую или следующую страницу
		window.addEventListener('popstate', () => {
			this.#setUrl()
		})
		this.#setUrl()
		this.#handleLinksClick()
	}

	// событие клика на ссылки для того, чтобы страница не перезагружалась а контент обновлялся
	#handleLinksClick () {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')
			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	getCurrentUrl() {
		return window.location.pathname
	}

	// назначение текущего урла в браузере
	navigate(url){
		if (url != this.getCurrentUrl()) {
			window.history.pushState({}, '', url)
			this.#setUrl()
		}
	}

	// поиск текущего урла в массиве с роутами
	#setUrl() {
		const  path = this.getCurrentUrl()
		let futureUrl = this.#routes.find(url => url.url === path)
		if (!futureUrl) {
			futureUrl = {
				component: NotFound
			}
		}
		this.#currentUrl = futureUrl
		this.render()
	}

	// рендер лайоута и проверка на его наличие
	render() {
		const component = new this.#currentUrl.component().render()
		if (!this.#layout) {
			this.#layout = new Layout({
				screen: component,
				router : this
			})
			document.getElementById('app').innerHTML = this.#layout.render()
			console.log(this.#layout)
		} else {
			document.querySelector('main').innerHTML = component
			console.log(component)
		}
	}
}