class ResultsController{
	constructor(GlobalValues, SearchService, $stateParams, $state) {
		'ngInject'
    this.searchTerm = $stateParams.search
    
    SearchService.getSearchData(this.searchTerm).then(
				(res) => {
					this.resultList = SearchService.shuffle(res.data.data)
          GlobalValues.resultList = this.resultList
        })      
	}
}

export default ResultsController
