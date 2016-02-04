'use strict';

angular.module('clickeatApp')
  .controller('PracticeCtrl', function ($scope, $modal) {
    $scope.message = 'Hello';
    $scope.vacancyList = [
    						{
    							category:'cat',
    							skill:'html',
    							requirement:'req',
    							date:'sdkfj',
    							rate:2
    						},
    						{
    							category:'cat',
    							skill:'html',
    							requirement:'req',
    							date:'sdkfj',
    							rate:2
    						}
    ]
    $scope.createVacancy = function(){
	 	var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'app/practice/practicereq.html',
	      controller: 'ModalInstanceCtrl',
	      size: 'lg',
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	     // $log.info('Modal dismissed at: ' + new Date());
	    });
    }
    $scope.editVacancy = function(){

    }

  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

	  $scope.items = items;
	/*  $scope.selected = {
	    item: $scope.items[0]
	  };*/

	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
});;
