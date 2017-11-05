'use strict';

const shared = angular.module('core.shared', []);

import constants from './services/constants';
import gitService from './services/git.service';

constants(shared);
gitService(shared);

export default shared;
