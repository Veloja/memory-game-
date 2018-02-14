app.controller('MemoryController', function ($scope, $timeout, memoryService) {
    $scope.nizNizova = memoryService.getNizNizova();
    console.log($scope.nizNizova);
    // scope var
    $scope.ne = true;
    $scope.isFlipped = false;
    $scope.currOpened = null;

    $scope.open = function (obj) {
        // if only one square is opened
        if ($scope.currOpened !== null) {
            // then open second square
            obj.opened = true;
            // disable click on third or any other square until checking is done
            disableRestOf();
            // check if first and second opened square are the same
            if ($scope.currOpened.value === obj.value) {
                // if they are, leave them opened and disabled for further clicking
                obj.opened = true;
                obj.disable = true;
                $scope.currOpened.disable = true;
                // enable all squares to be clicked again
                enableRestOf();
                // get current on null
                $scope.currOpened = null;
            } else {
                // if not same two squares, wait one sec before they both close
                $timeout(function () {
                    enableRestOf();
                    $scope.currOpened.opened = false;
                    $scope.currOpened.disable = false;
                    $scope.currOpened = null;
                    obj.opened = false;
                }, 1000);
            }
            // open first clicked square; start of the state
        } else {
            $scope.currOpened = obj;
            $scope.currOpened.opened = true;
            $scope.currOpened.disable = true;
        }
    }

    // for the timer
	$scope.timeLimit = 60000;
	$scope.isCritical = false;
	
    var timer = null;
    // start the timer as soon as the player presses start
	$scope.start = function(){
		$scope.ne = false;
		// set the time of 1 minutes and remove the cards guard
		$scope.timeLimit = 60000;
		$scope.inGame = true;

        $scope.startTimer();
	}	
	// function to stop the timer
	$scope.stopTimer = function() {    
	  $timeout.cancel(timer);
	  $scope.inGame = false;
	}

    $scope.startTimer = function() {
        $scope.timeLimit -= 1000;
        ifAllSquaresOpened();
        if($scope.timeLimit <= 10000){
            $scope.isCritical = true;
        }
        
        timer = $timeout($scope.startTimer, 1000);
        if ($scope.timeLimit === 0) {
            $scope.stopTimer();
        }
    };

    function enableRestOf() {
        for (var i = 0; i < $scope.nizNizova.length; i++) {
            for (var j = 0; j < $scope.nizNizova[i].length; j++) {
                if (!$scope.nizNizova[i][j].opened) {
                    $scope.nizNizova[i][j].disable = false;
                }
            }
        }
    }

    function disableRestOf(){
        for (var i = 0; i < $scope.nizNizova.length; i++) {
            for (var j = 0; j < $scope.nizNizova[i].length; j++) {
                if (!$scope.nizNizova[i][j].opened) {
                    $scope.nizNizova[i][j].disable = true;
                }
            }
        }
    }

    function ifAllSquaresOpened(){
        var niz = [];
        for (var i = 0; i < $scope.nizNizova.length; i++) {
            for (var j = 0; j < $scope.nizNizova[i].length; j++) {
                if ($scope.nizNizova[i][j].opened) {
                    niz.push($scope.nizNizova[i][j])
                } if(niz >= ($scope.nizNizova.length * $scope.nizNizova.length)){
                    $scope.ne = false;
                }
            }
        }
    }

    
});