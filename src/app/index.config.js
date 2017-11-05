/*global NODE_ENV*/
'use strict';

function config($logProvider, $compileProvider, $locationProvider) {
    'ngInject';
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }
}

export default config;
