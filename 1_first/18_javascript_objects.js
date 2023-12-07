


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
    // Setup
    function phoneticLookup(val) {
        var result = "";

        // Only change code below this line
        /*switch (val) {
            case "alpha":
                result = "Adams";
                break;
            case "bravo":
                result = "Boston";
                break;
            case "charlie":
                result = "Chicago";
                break;
            case "delta":
                result = "Denver";
                break;
            case "echo":
                result = "Elicha";
                break;
            case "foxtrot":
                result = "Frankie";
                break;
        }*/ // Vc pode substituir, toda essa instrucao em switch por um objecto, veja a baixo

        var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Elicha",
        "foxtrot": "Frankie"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
    } 

    // Change values here to test
    // console.log(phoneticLookup("foxtrot"));



    // Testing Objects for Properties
    // Setup
    var mYobj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    }

    function checkObj(checkProp) {
        // Your code here
        if (mYobj.hasOwnProperty(checkProp)) {
            return mYobj[checkProp];
        } else{
            return "Not found";
        }

    }

    // Test your code by modifying these values
    // console.log(checkObj("tille"));



    // Manipulating Complex Objects
    var myMusic = [
        {
            "artist": "Billy Joel",
            "tittle": "Piano Man",
            "release_year": 1973,
            "formats": [
                "CD",
                "8T",
                "LP"
            ],
            "gold": true
        },
        // Add record here
        {
            "artist": "Eliseu zau",
            "tittle": "Memories",
            "release_year": 2023,
            "formats": [
                "Youtube Video"
            ]
        }
    ];



    // Accessing Nested Objects
    // Setup
    var myStorange = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    var gloveBoxContents = myStorange.car.inside["glove box"]; // Change this line
    // console.log(gloveBoxContents);



    // Accessing Nested Arrays
    // Setup
    var myPlants = [
        {
            type: "flowers",
            list: [
                "rose",
                "tulip",
                "dandelion"
            ]
        },
        {
            type: "trees",
            list: [
                "fir",
                "pine",
                "birch"
            ] 
        }
    ];

    // Only change code below this line

    var secondTree = myPlants[1].list[2]; // Change this line
    // console.log(secondTree);



    // Record Collection
    var collection = {
        "2548": {
            "album": "Slippery when wet",
            "artist": "Bon Jovi",
            "tracks": [
                "Let It Rock",
                "You Give Love a Bad Name"
            ]
        },
        "2468": {
            "album": "1999",
            "artist": "Princi",
            "tracks": [
                "1999",
                "Little Red corvette"
            ]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "5439": {
            "album": "ABBA Gold"
        }
    };
    // Keep a copy of the collection for tests
    var collectionCopy = JSON.parse(JSON.stringify(collection));

    // Only change code below this line
    function updateRecords(id, prop, value) {
        if (value === "") {
            delete collection[id][prop];
        }else if (prop === "tracks") {
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
        }else {
            collection[id][prop] = value;
        }

        return collection;
    }

    // Alter values below to test your code
    updateRecords(2468, "tracks", "test");
    // console.log(updateRecords(5439, "artist", "ABBA"));

 



   