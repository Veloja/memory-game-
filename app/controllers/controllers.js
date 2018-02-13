app.controller('MemoryController', function ($scope, $timeout) {
    $scope.nizNizova = [
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
    ];

    $scope.currOpened = null;
    $scope.open = function (obj, index) {
        // ako je otvoreno jedno polje
        if ($scope.currOpened !== null) {
            // otvori i drugo
            obj.opened = true;
            disableRestOf();
            // provera da li su prvo otvoreno i drugo otvoreno isti
            if ($scope.currOpened.value === obj.value) {
                // ako jesu ostavi ih otvorene i disable oba
                obj.opened = true;
                obj.disable = true;
                $scope.currOpened.disable = true;
                // enable all others squares
                enableRestOf();
                // vrati current na null
                $scope.currOpened = null;
            } else {
                // ako nisu ista dva polja, ostavi 2 sek pre nego sto se zatvore
                $timeout(function () {
                    enableRestOf();
                    $scope.currOpened.opened = false;
                    $scope.currOpened.disable = false;
                    $scope.currOpened = null;
                    obj.opened = false;
                }, 1000);
            }
            // otvori prvo kliknuto polje; pocetak radnje; stanje
        } else {
            $scope.currOpened = obj;
            $scope.currOpened.opened = true;
            $scope.currOpened.disable = true;
        }
    }

    function enableRestOf() {
        for (var i = 0; i < $scope.nizNizova.length; i++) {
            for (var j = 0; j < $scope.nizNizova[i].length; j++) {
                if (!$scope.nizNizova[i][j].opened) {
                    console.log($scope.nizNizova[i][j].opened);
                    $scope.nizNizova[i][j].disable = false;
                }
            }
        }
    }

    function disableRestOf(){
        for (var i = 0; i < $scope.nizNizova.length; i++) {
            for (var j = 0; j < $scope.nizNizova[i].length; j++) {
                if (!$scope.nizNizova[i][j].opened) {
                    console.log($scope.nizNizova[i][j].opened);
                    $scope.nizNizova[i][j].disable = true;
                }
            }
        }
    }



});