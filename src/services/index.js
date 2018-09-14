import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import SearchService from './search.service';
servicesModule.service('SearchService', SearchService);

export default servicesModule;
