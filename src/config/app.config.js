function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
	'ngInject'

	//$locationProvider.html5Mode(true);

	$stateProvider
	.state('home', {
		template: '<home-page></home-page>'
	})
	.state('home.landing', {
		url: '',
		views: {
			"content@home": "landingPage"
		}
	})
	.state('home.search', {
		url: '/search/:search',
		views: {
			"content@home": "searchPage"
		},
    data: {
        title: 'Search'
    }
	})
}

export default AppConfig
