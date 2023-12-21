
    const apk = ["Hello World", "Bay Bay Wolrd"];

    function MyWorld(val) {
        switch (val) {
            case 0:
                result = apk[val];
                break;
            case 1:
                result = apk[val];
                break;
            default:
                result = "No Wolrd found, you mast create";
                break;
        }
        return result
    }

    console.log(MyWorld(0));