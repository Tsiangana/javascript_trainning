


    // Example
    function ourTrueOrFalse(isItTrue) {
        if (isItTrue) {
            return "Yes, it's true";
        }
        return "No, it's false";
    }


    function trueOrFalse(wasThatTrue) {
        if (wasThatTrue) {
            return "Yes, that was true";
        }
        return "No, that was not true";
    }

    //console.log(trueOrFalse(true)); //  se o valor da condiçao for verdadeira, nesse caso se passarmos como valor true, ele entra na condiçao e testa, caso nao, ele nao entra na condiçao



    // Comparision with the Equality Operator
    function testEqual(val) {
        if (val == 10) {
            return "Equal";
        }
        return "Not Equal";
    }

    // Change this value to test
    // console.log(testEqual(10));



    // Comparison with the String Equality Operator
    function testStrict(val) {
        if (val === 7) {
            return "Equal";
        }
        return "Not equal";
    }

    // Change this value to test
    testStrict(10);



    // Practice Comparing Different Values
    function compareEquality(a, b) {
        if (a === b) { // Change this line
            return "Equal";
        }
        return "Not Equal";
    }

    // Change this value to test
    // console.log(compareEquality(10, "10"));



    // Comparison with the Inequality Operator
    function testNotEqual(val) {
        if (val != 99) { // Change this line
            return "Not Equal";
        }
        return "Equal";
    }

    // Change this value to test
    // console.log(testNotEqual(10));



    // Comparison with the Strict Inequality Operator
    function testStrictNotEqual(val) {

        // Only Change Code Below this Line

        if (val !== 17) {
           //Only Change Code Above this line
           
           return "Not Equal";
        }
        return "Equal";
    }

    // Change this value
    // console.log(testStrictNotEqual(10));



    // Comparisons with the Logical And Operator
    function testGreaterThan(val) {
        if (val > 100) {  // Change this line
            return "Over 100";
        }

        if (val > 10) {  // Change this line
            return "Over 10";
        }

        return "10 or Under";
    }

    // Change this value to test 
    // console.log(testGreaterThan(10));



    // Comparison with the Greater THan or Equal To Operator
    function testGreaterOrEqual(val) {
        if (val >= 20) {  // Change this line
            return "20 or Over";
        }

        if (val >= 10) {  // Change this line
            return "10 or Over";
        }

        return " Less than 10";
    }

    // Change this value to test
    // console.log(testGreaterOrEqual(10));



    // Comparison with the Less Than Operator
    function testLessThan(val) {
        if (val < 100) {  // Change this line
            return "less 100";
        }

        if (val < 10) {  // Change this line
            return "less 10";
        }

        return "10 or less";
    }

    // Change this value to test 
    // console.log(testLessThan(10));



    // Comparison with the Less Than or Equal to Operator
    function testLessOrEqual(val) {
        if (val <= 10) {  // Change this line
            return "less or equal 20";
        }

        if (val <= 20) {  // Change this line
            return "less or equal 10";
        }

        return " Less than 10";
    }

    // Change this value to test
    // console.log(testLessOrEqual(10));



    // Comparisons with the Logical And Operator
    function testLogicalAnd(val) {
        // Only change code below this line

        if (val <= 50 && val >= 25) {
            return "Yes";
        }

        // Only change code above this Line
        return "No";
    }

    // Change this Value to test
    // testLogicalAnd(10);



    // Comparisons with the Logical Or Operator
