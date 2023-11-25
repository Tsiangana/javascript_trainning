

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