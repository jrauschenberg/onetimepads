angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $location, $window) {

    $scope.encodeDecode = function(message, key, method) {

      var resultString = '';
      var currentChar;
      if (method === 'code') {
        for (var i=0; i<message.length; i++) {
          currentChar = message[i];
          if (currentChar === ' ' || currentChar === '!' || currentChar === ',' || currentChar === '.' || currentChar === ':' || currentChar === ';') resultString += currentChar;
          else resultString += String.fromCharCode(((message.charCodeAt(i) - 97) + (key.charCodeAt(i) - 97)) % 26 + 97);

        }
      }
      else {
        for (var j=0; j<message.length; j++) {
          var num = ((message.charCodeAt(j) - 97) - (key.charCodeAt(j) - 97)) % 26 + 97;
          if (num < 97) num += 26;
          currentChar = message[j];
          if (currentChar === ' ' || currentChar === '!' || currentChar === ',' || currentChar === '.' || currentChar === ':' || currentChar === ';') resultString += currentChar;
          else resultString += String.fromCharCode(num);
        }
      }
      $scope.translation = resultString;

    };

  });
