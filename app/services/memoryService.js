app.service('memoryService', function () {
    // give exact aray based on users level
    this.getNizNizova = function (level) {
        if (level === 'easy') {
            var easyShuffle = shuffle(easy);
            return angular.copy(easyShuffle);
        } if (level === 'medium') {
            var mediumShuffle = shuffle(medium);
            return angular.copy(mediumShuffle);
        } if (level === 'hard') {
            var hardShuffle = shuffle(hard);
            return angular.copy(hardShuffle);
        }
    }

    // shuffle nizNizova
    function shuffle(arr) {
        var j, x, i;
        debugger;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
            for (var m = arr[i].length - 1; m > 0; m--) {
                var n = Math.floor(Math.random() * (m + 1));
                var x = arr[i][m];
                arr[i][m] = arr[i][n];
                arr[i][n] = x;
            }
        }
        return arr;
    }

    var easy = [
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }]
    ];

    var medium = [
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }],
        [{ value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }],
        [{ value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }, { value: 17 }, { value: 18 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }],
        [{ value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }],
        [{ value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }, { value: 17 }, { value: 18 }]
    ];

    var hard = [
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
        [{ value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }, { value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }],
        [{ value: 17 }, { value: 18 }, { value: 19 }, { value: 20 }, { value: 21 }, { value: 22 }, { value: 23 }, { value: 24 }],
        [{ value: 25 }, { value: 26 }, { value: 27 }, { value: 28 }, { value: 29 }, { value: 30 }, { value: 31 }, { value: 32 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
        [{ value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }, { value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }],
        [{ value: 17 }, { value: 18 }, { value: 19 }, { value: 20 }, { value: 21 }, { value: 22 }, { value: 23 }, { value: 24 }],
        [{ value: 25 }, { value: 26 }, { value: 27 }, { value: 28 }, { value: 29 }, { value: 30 }, { value: 31 }, { value: 32 }]
    ];




});