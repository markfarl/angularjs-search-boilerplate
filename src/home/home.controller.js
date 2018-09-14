class HomeController{
	constructor($state) {
		'ngInject';
    //This is so injected services are accesible outside of constructor 
		this._$state = $state; 
	}
}

export default HomeController;