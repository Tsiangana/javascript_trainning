

    function ourReusableFunction() {
        console.log("Heyya, World");
    }

    // ourReusableFunction();



    // Passing Values to Functions with Arguments
    function ourFunctionWithArgs(a, b) {
        console.log(a * b);
    }

    // ourFunctionWithArgs(10, 5); // Output 5



    // Global Scope and Functions
    // Declare your variable here
    var myGlobal = 10;


    function func1() {
        // Assign 5 to oopsGlobal here
        oopsGlobal = 5;
    }

    // Only change code above this line
    function func2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal + "\t";
        }
        if (typeof oopsGlobal != "undefined") {
            output += "oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }

    // func1();
    // func2();



    // Local Scope and Functions
    function myLocalSCope() {
        var myVar = 5;
        console.log(myVar);
    }
    // myLocalSCope();



    // Global vs Local Scope in Functions
    var outerWear = "T-Shirt";

    function myOutfit() {
        var outerWear = "sweater";

        return outerWear;
    }

    // console.log(myOutfit());



    // Return a value from a function with return 
    function minusSeven(num) {
        return num - 7;
    }

    // console.log(minusSeven(10));



    // Understanding Undefined Value returned from a function
    var sum = 0;
    function addThree() {
        sum = sum + 3;
    } // quando uma funçao nao possui 'return' o seu valor é undefined, ou seja, indefinido
    
    

    // Assignment with a Returned Value
    var changed = 0;

    function change(num) {
        return (num + 5) / 3;
    }

    changed = change(10); //  essa funcao change ele rouba o valor de um resulda retornado de uma funcao e substitue ele pelo valor atribuido

    var processed = 0;

    function processArg(num) {
        return (num + 3) / 5;
    }
