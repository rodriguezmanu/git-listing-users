'use strict';

export default function (app) {
    app
        .service('gitService', gitService);

        function gitService (URLS, $http) {
            'ngInject';

            this.getCommits = getCommits;

            /**
             * Get commits data from github API
             * @param {String} owner
             * @param {String} repo
             * @return {Promise}
             */
            function getCommits(owner, repo) {
                let config = '',
                    url = `https://api.github.com/repos/${owner}/${repo}/commits`;

                return $http.get(url, config);
            }
        }
}
