

    // Create string using templates literals
    const person = {
        name: "Zodiac Hasbro",
        age: 56
    };

    // Template literal with multi-line and string interpolation
    const greeting = `Hello, my name is ${person.name}! 
    I am ${person.age} years old.`;

    // console.log(greeting);

    const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-no-top", "linebreak"],
        skipped: ["id-blacklist", "no-dup-keys"]
    };
    function makeList(arr) {
        const resultDisplayArray = [];
        for (let i = 0; i < arr.length; i++) {
            resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
            
        }

        return resultDisplayArray;
    }
    /**
     * makeList(result.failure) should return:
     * [ `<li class="text-warning">no-var</li>`,
     *   `<li class="text-warning">var-on-top</li>`,
     *   `<li class="text-warning">linebreak</li>` ]
     **/
    const resultDisplayArray = makeList(result.failure);
    // console.log(resultDisplayArray);




    // Write Concise Object Literal Declarations Using Simple Fields