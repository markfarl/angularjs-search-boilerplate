import angular from 'angular'
import { ResultsComponent } from './results/results.component'
import { SearchComponent } from './search/search.component'

export default angular.module('app.components', [])
.component('resultsList', ResultsComponent)
.component('searchBox', SearchComponent)
.name
