export default class SearchService {
  	constructor(AppConstants, $http, GlobalValues) {
		'ngInject'
		this._AppConstants = AppConstants
		this._$http = $http
		this._GlobalValues = GlobalValues

		// Object to store our search data
		this.current = null
	}

	getSearchData(searchTerm) {
    //Your API calls in here *searchTerm var comes from input*
		let route = "search.json"
		return this._$http({
			url: this._AppConstants.api + route,
			method: 'GET'
		})
	}
	
		
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));  //Dont delet semi colon *breaks     *
			[a[i], a[j]] = [a[j], a[i]]
		}
		return a
	}
}