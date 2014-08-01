'use strict';

/**
 * @ngdoc directive
 * @name confDesignaApp.directive:loader
 * @description
 * # loader
 */
angular.module('confDesignaApp')
  .directive('loader', function () {
    return {
      templateUrl: 'views/loader.html',
      restrict: 'E',
    };
  });
