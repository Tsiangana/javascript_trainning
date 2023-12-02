


    // Example
    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };

    // Only change code below this line

    var myDog = {
        "name": "Killat",
        "legs": 3,
        "tails": 2,
        "friends": []
    }



    // Accessing Object Properties with Dot Notation
    // Setup
    var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "others": "cleats"
    }

    // Only change code below this line

    var hatValue = testObj.hat;        // Change this line
    var shirtValue = testObj.shirt;     // Change this line
    // Usamos isso para acessar aos valores das propriedades de um bojecto, primeiro metemos o nome do objecto e o ponto com o nome da propriedade, assim podemos manipulalos avontade




    // Accessing Object Properties with Bracket Notation
    // Uma outra maneira de acessar ao valor da propriedade de um objecto, essa maneira normalmente e usada quando a propriedade de um objecto possui espaco/divisao de palavras
    // Setup
    var testObjOne = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    }

    // Only change code below this line

    var entreeValue = testObjOne["an entree"];        // Change this line
    var drinkValue = testObjOne['my side'];     // Change this line



    // Accessing Object Properties with Variables
    var testObjTwo = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };

    // Only change code below this line

    var playerNumber = 16;                    // Change this line
    var player = testObjTwo[playerNumber];   // Change this line



    // Updating Object Properties
    // Example
    var ourDogOne = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends": ["everything!"]
    };

    ourDogOne.name = "Killat";

    // Only change code below this line



    // Add New Properties to an Object
    // Example
    var ourDogTwo = {
        "name": "Dedrix",
        "legs": 4,
        "tails": 1,
        "friends": ["Free code Campers!"]
    };

    ourDogTwo.bark = "how-how" // in stade of this
    ourDogTwo['age'] = 18;  // you can use this

    // Only change code below this line



    // Delete Properties from an Object
    // Example
    var ourDogThree = {
        "name": "Dedrix",
        "legs": 4,
        "tails": 1,
        "friends": ["Free code Campers!"]
    };

    delete ourDogThree.friends;



    // Using Objects for Lookups



   