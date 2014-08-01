'use strict';

angular.module('confDesignaApp')
.controller('MainCtrl', function ($scope, DesignaEvents, settings) {

  $scope.header = 'themes/'+settings.theme+'/'+settings.partials.header;
  $scope.panelists = 'themes/'+settings.theme+'/'+settings.partials.panelists;
  $scope.programing = 'themes/'+settings.theme+'/'+settings.partials.programing;
  $scope.place = 'themes/'+settings.theme+'/'+settings.partials.place;
  $scope.sponsors = 'themes/'+settings.theme+'/'+settings.partials.sponsors;

  $scope.loading = true;
  
  DesignaEvents.fetch().then(function(response){
    $scope.data = response.data;
    changeBackground();
    $scope.loading = false;
  });

  function changeBackground() {
    var windowHeight = $(window).height();
    $('.main-header').css({
      'min-height': windowHeight,
      'background-image': 'url('+$scope.data.cover+')'
    });
  }

});
