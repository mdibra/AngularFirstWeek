function profileController($scope) {
	$scope.hobbies = [];
	$scope.addHobbies = function(addHobby) {
		$scope.hobbies = [];
		if ($scope.hobbies.indexOf(addHobby)==-1) {
			$scope.hobbies.push(addHobby);
		} 
	}	
    $scope.addHobby = function () {
        $scope.errMsg = "";
        if (!$scope.addOne) {return ;}
        if ($scope.hobbies.indexOf($scope.addOne) == -1) {
            $scope.hobbies.push($scope.addOne);
        } else {
            $scope.errMsg = "It's already added.";
        }
    }
	     $scope.removeItem = function (hobby) {
        $scope.errMsg = "";
        $scope.hobbies.splice(hobby, 1);
    }
	$scope.showInfo = true;
}
