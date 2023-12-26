

    let array = ["dota","Dota","DOTA"];

    function verificacao(nome) {
        if (nome === array[0] || nome === array[1] || nome === array[2]) {
            return true;
        }else {
            return false;
        }
    }

    console.log(verificacao("dota"));