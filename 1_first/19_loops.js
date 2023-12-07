

    // interative loops with while
    var myArray = [];

    var i = 0;
    while (i < 5) {
        myArray.push(i);
        i++;
    }

    // console.log(myArray);



    // Interate with For Loops
    var ourArray = [];

    for (let i = 0; i < 5; i++) {
        ourArray.push(i);
    }

    // console.log(ourArray);



    // Iterate Odd Numbers with a for Loop
    // Example
    var ourNewArray = [];

    for (var i = 0; i < 10; i += 2) {
        ourNewArray.push(i);
    }

    // console.log(ourNewArray);



    // Count Backwards with a for Loop
    // Example 
    var OneArray = [];

    for (var i = 10; i > 0; i -= 2) {
        OneArray.push(i);
    }

    // console.log(OneArray);



    // Iterate Through an Array with a For Loop
    var ourArr = [9, 10, 11, 12];
    var ourTotal = 0;

    for (let i = 0; i < ourArr.length; i++) {
        ourTotal += ourArr[i];
    }
    
    // console.log(ourTotal);



    // Nesting For Loops
    function multiplyAll(arr) {
        var product = 1;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                product *= arr[i][j]
            }
        }

        return product;
    }

    var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

    // console.log(product);



    // Interate with Do...While Loops



