class SearchController{
	constructor($state, $stateParams) {
		'ngInject'
		this._$state = $state
    //Fill in value of input box if exists
    this.searchTerm = $stateParams.search
	}
  
  submitSearch(){
    //get results
    this._$state.go('home.search', {search:this.searchText})
  }
}

export default SearchController
