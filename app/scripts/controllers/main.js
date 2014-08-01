'use strict';

angular.module('confDesignaApp')
.controller('MainCtrl', function ($scope, DesignaEvents) {

  $scope.loading = true;
  
  DesignaEvents.fetch().then(function(response){
    $scope.data = response.data;
    $scope.loading = false;
  });

});
