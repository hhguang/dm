angular.module('starter.services', ['ngResource'])
.factory('Student', function($resource){
      return $resource('/students.json?bj=5', {}, {
        query: {method:'GET', isArray:true}
      });
    })
/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', attend: false,description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', attend: false,description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', attend: false,description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', attend: false,description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];


  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
