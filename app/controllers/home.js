angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $location, $window) {

    $scope.encodeDecode = function(message, key, method) {

      let resultString = '';
      if (method === 'code') {
        for (let i=0; i<message.length; i++) {
          resultString += String.fromCharCode(((message.charCodeAt(i) - 97) + (key.charCodeAt(i) - 97)) % 26 + 97);
        }
      }
      else {
        for (let i=0; i<message.length; i++) {
          let num = ((message.charCodeAt(i) - 97) - (key.charCodeAt(i) - 97)) % 26 + 97;
          if (num < 97) num += 26;
          resultString += String.fromCharCode(num);
        }
      }
      $scope.translation = resultString;

    };

  });
