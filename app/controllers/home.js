angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $location, $window) {

    $scope.encodeDecode = function(message, key, method) {

      var resultString = '';
      if (method === 'code') {
        for (var i=0; i<message.length; i++) {
          if (message[i] === ' ') resultString += ' ';
          else resultString += String.fromCharCode(((message.charCodeAt(i) - 97) + (key.charCodeAt(i) - 97)) % 26 + 97);

        }
      }
      else {
        for (var i=0; i<message.length; i++) {
          var num = ((message.charCodeAt(i) - 97) - (key.charCodeAt(i) - 97)) % 26 + 97;
          if (num < 97) num += 26;
          if (message[i] === ' ') resultString += ' ';
          else resultString += String.fromCharCode(num);
        }
      }
      $scope.translation = resultString;

    };

  });
