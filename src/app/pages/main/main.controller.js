'use strict';

function MainController(gitService) {
    'ngInject';

    let vm = this;

    init();

    function init() {
        vm.title = 'Github Listing';
    }
}

export default MainController;
