

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
    function checkScope() {
        "use strict";
        let i = "function scope";
        if (true) {
            let i = "block scope";
            console.log("Block scope i is: ", i);
        }
        console.log("function scope i is: ", i);
        return i;
    }

    // checkScope();





    // Declare a read-only variable with the const Keyword
    function printManyTimes(str) {
        "use strict";

        const SENTENCE = str + " is cool!";

        //sentence = str + " is amazing!";

        for (let i = 0; i < str.length; i+=2) {
            console.log(SENTENCE);
            
        }
    }

    // printManyTimes("freecodecamp");





    // Mutate an Array Declared with const 
    const s = [5, 7, 5];
    function editInPlace() {
        "use strict";

        //s = [2, 5, 7];
        s[0] = 2;
        s[1] = 5;
        s[2] = 7;

        return s;
    }

    // console.log(editInPlace());




    // Prevent Object Mutation
    function freezeObj() {
        "use strict";
        const MATH_CONSTANTES = {
            PI: 3.14
        };

        Object.freeze(MATH_CONSTANTES);

        try {
            MATH_CONSTANTES.PI = 99;
        } catch( ex ) {
            console.log(ex);
        }
        return MATH_CONSTANTES
    }

    // const PI = freezeObj();

    // console.log(PI);




    // Use Arrow Functions to write Concise Anonymous Functions
    const magic = () => new Date();



    // Write Arrow function with parameters
    const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

    // console.log(myConcat([1, 2], [3, 4, 5]));




    // Write Higher Order Arrow Functions
    const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

    const squareList = (arr) => {
        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
        return squaredIntegers;
    };

    // const squaredIntegers = squareList(realNumberArray);
    // console.log(squaredIntegers);




    // Write Higher Order Arrow Functions
    const increment = (function() {
        return function increment(number, value = 1) {
            return number + value;
        };
    })();
    // console.log(increment(5, 2));
    // console.log(increment(5));




    // Use the Rest Operator with Function Parameters
    const sum = (function() {
        return function sum(...args) { // O rest converte parametros em arrays

            return args.reduce((a, b) => a + b, 0);
        };
    })();
    // console.log(sum(1, 2, 3, 5));




    // Use the spread operator to evaluate Arrays In-Place
    const arrr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

    let arrr2;
    (function() {
        arrr2 = [...arrr1]; // Quando usamos o spreed a variavel q atribuimos o valor da variavel existente ou array, passa a ser uma copia do que ja existe e voce pode alterar a variavel posteriomente e o valor copiado nao será alterado
        arrr1[0] = 'potato';
    })();
    // console.log(arrr2);




    



