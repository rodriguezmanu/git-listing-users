'use strict';

import listingDirective from './listing.directive';
import './listing.scss';

const listingModule = angular.module('listing-module', []);

listingModule
    .directive('listingGit', listingDirective);

export default listingModule;
