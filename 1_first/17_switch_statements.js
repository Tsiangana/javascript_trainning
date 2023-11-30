

    function caseInSwitch(val) {
        var answer = "";

        switch (val) {
            case 1:
                answer = "alpha";
                break;
            case 2:
                answer = "beta";
                break;
            case 3:
                answer = "gamma";
                break;
            case 4:
                answer = "delta";
                break;
        }

        return answer;
    }

    // Change this value to test
    //console.log(caseInSwitch(1));

    /*
    Write a switch statement which tests val and sets answer for the following conditions:
    1 - "alpha"
    2 - "beta"
    3 - "gamma"
    4 - "delta"
    */



    // Default Option in Switch Statements
    function switchOfStuff(val) {
        var answer = "";

        switch (val) {
            case "a":
                answer = "apple";
                break;
            case "b":
                answer = "bird";
                break;
            case "c":
                answer = "cat";
                break;
            default:
                answer = "No answer";
                break;

        }

        return answer;
    }

    // console.log(switchOfStuff("c"));



    // Multiple Identical Options in Switch Statements
    function sequentialSizes(val) {
        var answer = "";
        switch (val) {
            case 1:
            case 2:
            case 3:
                answer = "Low";
                break;
            case 4:
            case 5:
            case 6:
                answer = "middle";
                break;
        }

        return answer;

    }

    // Change this values to test
    // console.log(sequentialSizes(5));



    // Replacing If Else Chains with Switch
    function chainToSwitch(val) {
        var answer = "";
        // Only change code below this line

        switch (val) {
            case "bob":
                answer = "Marley"
                break;
            case "42":
                answer = "The answer"
                break;
            case "1":
                answer = "There is no #1"
                break;
        
            default:
                answer = "There is no answer"
                break;
        }

        // Only change code above this line
        return answer;
    }

    // console.log(chainToSwitch(2));



    // Returning Boolean Values from Functions