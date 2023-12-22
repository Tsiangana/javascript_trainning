

    /*****
    CODE    OUTPUT
    \'      single quote
    \"      double quote
    \\      backslash
    \n      newline
    \r      carriage return
    \t      tab
    \b      backspace
    \f      form feed
    ****/

    var myStr = "\tFirst line\n\t\\Second line more";
    /*console.log(myStr);*/


    // Concatenating Strings with Plus Operator
    var ourStr = "I come first. "+ "I come second.";

    // Only change code below this line

    

    // Concatenating Strings with Plus Equals Operator
    var newOurStr = "I come first. ";
    newOurStr += "I come second.";
    /*console.log(newOurStr)*/



    // Constructing Strings with variables
    var ourName = "freeCodecamp";
    var ourString = "Hello, our name is " + ourName + ", how are you?";
    //console.log(ourString);



    //Appending Variables to Strings
    var firstName = "Pedro";
    var lastName = " Zau";
    firstName += lastName;
    // console.log(firstName);


    // Find Length of String
    var myFirstNameLength = 0;
    var myFirstName = 'Ada';

    myFirstNameLength = myFirstName.length;
    console.log(myFirstNameLength);


    // Bracket Notation to find first character in String
    var oneFirstLetterOfFirstName = '';
    var oneFirstName = 'Ada';

    oneFirstLetterOfFirstName = oneFirstName[0];
    //console.log(oneFirstLetterOfFirstName);


    // String Immutability 
    var oneMyStr = 'Eliseu zau';

    // oneMyStr[0] = 'H';  <-- DESSE JEITO NAO PODE MUDAR, OU SEJA NAO PODEMOS MUDAR UMA LETRA DE UMA STRING
    // oneMyStr = 'Pedro zau'; <-- DESSE JEITO SIM PODE MUDAR




    // Bracket Notation to Find Nth Character in String
    var twoFirstName = 'Ada';
    var secondLetterOfFirstName = twoFirstName[1];

    
    
    // Bracket Notation to find Last character in string
    var thirdFirstName = 'Ada';
    var lastLetterOfFirstName = thirdFirstName[thirdFirstName.length - 1]
    // console.log(lastLetterOfFirstName);



    // Bracket Notation to Find Nth-to-Last Character in String
    var fourFirstName = 'Adadwewe';
    var fourToLastLetterOfFirstName = fourFirstName[fourFirstName.length - 3];
    // console.log(fourToLastLetterOfFirstName)




