app.service('memoryService', function(){

    this.getNizNizova = function(){
        var shuffledNizNizova = shuffle(nizNizova);
        return angular.copy(shuffledNizNizova);
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
            for(var m = arr[i].length - 1; m > 0; m--){
                var n = Math.floor(Math.random() * (m + 1));
                var x = arr[i][m];
                arr[i][m] = arr[i][n];
                arr[i][n] = x;
            }
        }
        return arr;
    } 
    
    var nizNizova = [
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }],
    ];


});