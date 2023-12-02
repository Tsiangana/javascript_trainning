

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
    function isLess(a, b) {
        // Fix this code
        /*if (a < b) {
            return true;
        }else {
            return false;
        }*/  //In stade of these you can do this:

        return a < b;
        
    }

    // Change these values to test
    // console.log(isLess(10, 15));



    // Returning Early Pattern from Functions
    // Setup
    function abTest(a, b) {
        // Only change code below this line

        if (a < 0 || b < 0) { // isso serve para demostrar que podemos sair da funcao quando quisermos
            return undefined;
        }

        // Only change code above this line

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
        
    }

    // Change these values to test
    // console.log(abTest(-2, 15));



    // Counting Cards
    var count = 0;

    function cc(card) {
        switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                break;
        }

        var holdbet = "Hold";
        if (count > 0) {
            holdbet = 'Bet';
        }


        return count + " " + holdbet;
    }


    cc(2); cc(3); cc(7); cc('K'); cc('A');
    console.log(cc('1'));