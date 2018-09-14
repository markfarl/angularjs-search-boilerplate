import angular from 'angular';
import autoCompleteModule from 'angular-auto-complete';
import uiRouter from '@uirouter/angularjs';
import constants  from './config/app.constants';
import globals  from './config/app.globals';
import appConfig  from './config/app.config';
import Components from './components/components';
import './scss/main.scss';
import { HomeComponent } from './home/home.component';
import { LandingPage } from './pages/landing/landing.page';
import { SearchPage } from './pages/search/search.page';
import './services';

angular.module('app', [
	uiRouter,
	Components,
	'app.services'
])
.component('homePage', HomeComponent)
.component('searchPage', SearchPage)
.component('landingPage', LandingPage)
.constant('AppConstants', constants)
.value('GlobalValues', globals)
.config(appConfig);