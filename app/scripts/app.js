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
  DesignaEventsProvider.setEventName('rupy');
});
