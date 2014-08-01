'use strict';

/**
* @name confDesignaApp
* # confDesignaApp
*
* Main module of the application.
*/
angular
.module('confDesignaApp', ['ngDesignaEvents'])
.config(function(DesignaEventsProvider){
  DesignaEventsProvider.setEventName('agilevale');
})
.constant('settings', {
  theme: 'default',
  partials: {
    header: 'header.html',
    panelists: 'panelists.html',
    programing: 'programing.html',
    place: 'place.html',
    sponsors: 'sponsors.html'
  }
});

