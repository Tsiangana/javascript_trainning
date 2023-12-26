
    function randomic(e) {
        if (e >= 1 || e <= -1) {
            return e * Math.random();
        }else {
            return "Change de Number";
        }
    }

    console.log(randomic(1));