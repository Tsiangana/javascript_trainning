
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
        // Your code below this line
        var result = "";
        
        result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

        // Your code above this line
        return result;
    }


    // Change the words here to test your function
    console.log(wordBlanks("dog", "big", "ran", "quickly"));
    console.log(wordBlanks("bike", "slow", "flew", "slowly"));
    