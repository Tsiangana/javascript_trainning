


// Use Destructuring assignment to assign variables from objects
    var voxel = {x: 3.6, y: 7.4, z: 6.54};

    var x = voxel.x; // x = 3.6
    var y = voxel.y; // y = 7.4
    var z = voxel.z; // z = 6.54

    const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


    const AVG_TEMPERATURES = {
        today: 77.5,
        tomorrow: 79
    };

    function getTempOfTmrw(avgTemperatures) {
        "use strict";
        // change code below this line
        const { tomorrow : getOfTomorrow } = avgTemperatures; // change this line
        // change code above this line
        return getOfTomorrow;
    }

    // console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79




    // Destructuring Assignment with Nested Objects
    const LOCAL_FOREST = {
        today: { min: 72, max: 83 },
        tomorrow: { min: 73.3, max: 84.6 },
    };

    function getMaxOfTmrw(forecast) {
        "use strict";

        const { tomorrow : { max: maxOfTomorrow } } = forecast;

        return maxOfTomorrow;
    }

    // console.log(getMaxOfTmrw(LOCAL_FOREST));




    // Use destructuring assignment to assign variables from arrays
    const [z1, x1, , y1] = [1, 2, 3, 4, 5, 6, 7];
    // console.log(z1, x1, y1);

    let a1 = 8, b1 = 6;
    (() => {
        "use strict";
        [a1, b1] = [b1, a1]
    })();
    // console.log(a1);
    // console.log(b1);




    // Use destructuring assignment with the rest operator
    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
        

        const [ , , ...arr] = list;

        return arr;
    }
    const arr = removeFirstTwo(source);
    // console.log(arr);
    // console.log(source);




    // Use destructuring assignment to pass an object as a function's Parameters
    const stats = {
        max: 56.78,
        standard_deviations: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };

    const half = (function() {
        
        return function half({ max, min }) {
            return (max + min) / 2.0;
        };

    })();
    console.log(stats);
    console.log(half(stats));