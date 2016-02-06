'use strict';

angular.module('clickeatApp')
  .controller('PracticeCtrl', function ($scope, $modal) {
    $scope.vacancyList = [
    						{
    							category:'cat',
    							desc:'bal',
    							count:9,
    							skill:'html',
    							dt:new Date(),
    							mytime: new Date(),
    							rate:2,

    						},
    						{
    							category:'cat',
    							desc:'bal',
    							count:9,
    							skill:'html',
    							dt:new Date(),
    							mytime: new Date(),
    							rate:2
    						}
    ];
    $scope.formateDate = function(str){
    	var dateObj = new Date(str);
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var day = dateObj.getUTCDate() + 1;
		var year = dateObj.getUTCFullYear();

		return day + "-" + month + "-" + year;
    }
    $scope.createVacancy = function(){
    	openModal();
    }
    $scope.editVacancy = function(vacancy){
    	openModal(vacancy);
    }
    $scope.trash = function(vacancy){
    	//trash vacancy here..
    }
    var openModal = function(vacancy){
    	$scope.items = vacancy;
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

  }).controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
	  $scope.items = items;
	  if($scope.items){
	  	$scope.req = $scope.items;
	  	$scope.updateEnable = true;
	  }else{
  	  	$scope.req={};
	  }
	/*  $scope.selected = {
	    item: $scope.items[0]
	  };*/

	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  $scope.popup1 = {
	    opened: false
	  };
	  $scope.maxDate = new Date(2020, 5, 22);

	  $scope.openPicker = function() {
	    $scope.popup1.opened = true;
	  };	
      $scope.minDate = new Date();
      $scope.today = function() {
   	  	$scope.req.dt = new Date();
  	  };
  	  $scope.today();

  	  $scope.req.mytime = new Date();

	  $scope.hstep = 1;
	  $scope.mstep = 15;
	  $scope.ismeridian = true;

	  $scope.makeRequest = function(form){
	  	$scope.submitted = true;
	  	if(form.$valid){
	  /*		{
	  		  category: $scope.req.category,
			  desc: $scope.req.desc,
			  skill: $scope.req.skill,
			  count: $scope.req.count,
			  rate: $scope.req.rate,
			  date: $scope.req.dt,
			  time: $scope.req.mytime
	  		}*/
	  		if($scope.updateEnable){//update the existing vacancy

	  		}else{//creating new vacancy

	  		}
	  	}
	  }
});
