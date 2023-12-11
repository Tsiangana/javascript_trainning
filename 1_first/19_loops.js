

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
    // Setup
    var myArrayWhile = [];
    var i = 10;

    // Only change code below this line

    do {  // no do while, ele primeiro roda o codigo uma vez antes de executar a condicao
        myArrayWhile.push(i);
        i++;
    } while (i < 5); 

    /*while (i < 5) {  // E ja no while, ele nunca vai rodar o codigo sem antes verificar a condicao
        myArrayWhile.push(i);
        i++;
    }*/

    // console.log(i, myArrayWhile);



    // Profile Lookup
    // Setup
    var contacts = [
        {
            "firstName": "Akira",
            "LastName": "Laine",
            "number": "933242353",
            "Likes": ["Pizza", "Coding", "Brownie Points"]
        },
        {
            "firstName": "Harry",
            "LastName": "Potter",
            "number": "933213353",
            "Likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "LastName": "Holmes",
            "number": "033213353",
            "Likes": ["Intriguing", "Cases", "Violin"]
        },
        {
            "firstName": "Eliseu",
            "LastName": "Zau",
            "number": "Unknown",
            "Likes": ["Javascript", "Gaming", "Guitar"]
        }
    ];

    function lookUpProfile(name, prop) {
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
                return contacts[i][prop] || "No such property";
            }
            
        }
        return "No such contact";
    }

    // Change these values to test your function
    var data = lookUpProfile("Eliseu", "Likes");

    // console.log(data);



    // Generate Random Fractions
    function randomFractions() {
        
        return Math.random();
    }

    // console.log(randomFractions());



    // Generate Random Whole Numbers
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

    function randomWholeNum() {
        

        return Math.floor(Math.random() * 10);
    }

    // console.log(randomWholeNum());




    // Generate Random Whole Numbers Within a Range
    // Example
    function ourRandomRange(ourMin, ourMax) {
        
        return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    }

    // console.log(ourRandomRange(1, 9)); // Todo numero estará no intervalo dos numeros passados como parrametros




    // Use the parseInt Function
    function convertToInteger(str) {
        return parseInt(str);
    }

    // console.log(convertToInteger("56"));




    // Use the parseInt Function with a Radix
    function convertToIntenger(str) {
        return parseInt(str, 2)
    }

    // console.log(convertToIntenger("10011"));




    // Use the comditional (Ternary) Operator
    // conditon ? statement-if-true : statement-if-false;

    function checkEqual(a, b) {
        return a === b ? true : false;
            // os dois funcionam e chegam ao mesmo resultado.
        // return a === b;
    }

    // console.log(checkEqual(1, 2));




    // Use multiple condition (Ternary) Operartors
    function checkSign(a) {
        return a > 0 ? "positive" : a < 0 ? "Negative" : "zero";
    }

    // console.log(checkSign(10));
    // OBS: verificar sempre bem as variaveis




    // Differences Between the var and let Keywords
    let catName = "Quincy";
    var quote;

    catName = "Beau";

    function catTalk() {
        "use strict";

        catName = "Oliver";
        quote = catName + " says Meow!";

        return quote;

    } // uma das razoes que faz as pessoas usarem let e nao var é que o let só te permite declarar uma varialvel uma vez, e se vc declarar a mesma variavel 2 vezes ele dá erro, mais ja com o var isso nao acontece, simplesmente ele anula a variavel

    // console.log(catTalk());




    // Compare Scope of the var and let Keywords



