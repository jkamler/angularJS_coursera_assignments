(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {

    $scope.readMenu = function(){
        if (typeof $scope.myMenu === 'undefined' || !$scope.myMenu) {
          $scope.msg = "Please enter data first";
        } else {
          var myArr = $scope.myMenu.split(',')
          if (myArr.length <=3) {
            $scope.msg = "Enjoy!";
          } else {
            $scope.msg = "Too much!";
          };
        };
    };

  };
})();
