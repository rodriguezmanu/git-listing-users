'use strict';

import moment from 'moment';

import ListingTpl from './listing.html';

function ListingComponent() {
    'ngInject';

    const directive = {
        restrict: 'E',
        templateUrl: ListingTpl,
        controller: ListingController,
        controllerAs: 'vm',
        scope: {}
    };

  return directive;

    function ListingController(gitService) {
        'ngInject';

        let vm = this;

        vm.getCommits = getCommits;
        vm.setTimeCommit = setTimeCommit;

        init();

        function init() {
            getCommits();
        }

        /**
         * Get commits from git service
         */
        function getCommits() {
            vm.loading = true;
            gitService.getCommits('angular', 'angular')
                .then(function(response) {
                        vm.commits = response.data;
                        vm.loading = false;
                    }, function(response) {
                        vm.commits = [];
                        vm.loading = false;
                    });
        }

        /**
         * Set specific format from now to render on view
         * @param {String} time
         * @return {String}
         */
        function setTimeCommit(time) {
            return moment(time).fromNow();
        }
    }
}

export default ListingComponent;
