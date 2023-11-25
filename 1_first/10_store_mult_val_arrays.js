

    // Example
    var ourArray = ["John", 23];



    // Nested Array
    var oneOurArray = [["the universe", 42], ["everything", 101010]];



    // Access Array Data with Indexes
    var ourMultArray = [50,60,70];
    var ourData = ourMultArray[0];



    // Modify Array Data with Indexes
    var modifyOurArray = [18,64,99];
    modifyOurArray[1] = 45;  // modifyOurArray now equals [18,45,99]



    // Access Multi-Dimensional Arrays with Indexes
    var myDimentionalArrays = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

    var myData = myDimentionalArrays[2][1];



    // Manipulate Arrays with push()
    var pushOurArray = ["Stimpson", "J", "cat"];
    pushOurArray.push(["happy", "joy"]);
    // pushOurArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]



    // Manipulate Arrays with pop()
    var popOurArray = [1,2,3];
    var removedFromOurArray = popOurArray.pop();
    // removedFromOurArray now equals 3, and popOurArray now equals [1,2]

    // Testing
    var popMyArray = [["John", 23], ["cat",2]];

    var TestingRemovedFromMyArray = popMyArray.pop();



    // Manipulate Arrays with shift()
    var shiftOurArray = ["john", "J", ["cat"]];
    var shiftRemovedFromArray = shiftOurArray.shift();



    // Manipulate Arrays with unshift()
    var unshiftOurArray = ["Stimpson", "J", "cat"];
    // --> unshiftOurArray.shift(); // unshiftOurArray now equals ["J", "cat"];
    unshiftOurArray.unshift("Happy");
    // unshiftOurArray now equals ["Happy", "J", "cat"];



    // console.log(unshiftOurArray)