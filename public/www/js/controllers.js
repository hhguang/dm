angular.module('starter.controllers', ['ionic'])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $ionicActionSheet,PetService,Student) {
  // "Pets" is a service returning mock data (services.js)
  $scope.students=Student.query();

  $scope.pets = PetService.all();

  $scope.query=false;

  $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.pets, function(pet) {
          count += pet.attend ? 1 : 0;
        });
        return count;
  };

  $scope.change_query=function(q){
	  $scope.query=q
  };

  $scope.show = function(tels) {
    var bs=[];
      for (tel in tels){
        bs.push({text : tels[tel]});
      };

    // Show the action sheet
    $ionicActionSheet.show({

      // The various non-destructive button choices
      // buttons: [
      //   { text: 'Share' },
      //   { text: 'Move' },
      // ],

      buttons: bs,

      // The text of the red destructive button
      destructiveText: 'Delete',

      // The title text at the top
      titleText: '电话',

      // The text of the cancel button
      cancelText: 'Cancel',

      // Called when the sheet is cancelled, either from triggering the
      // cancel button, or tapping the backdrop, or using escape on the keyboard
      cancel: function() {
      },

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
        location.href="tel://"+tels[index];
        return true;
      },

      // Called when the destructive button is clicked. Return true to close the
      // action sheet. False to keep it open
      destructiveButtonClicked: function() {
        return true;
      }
    });

  };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});

