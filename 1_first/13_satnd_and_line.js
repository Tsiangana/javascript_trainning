
    // OBS: preciso rever essa aula nos dia de exercicio, nao percebi lá muito bem


    function nextInLine(arr, item) {
        // Your code here
        arr.push(item);
        return arr.shift();
    }

    var testArr = [1,2,3,4,5];


    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));