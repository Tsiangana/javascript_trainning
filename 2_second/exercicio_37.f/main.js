
let pessoas = ['Aegir', 'Aud', 'Balder'];

let Add = () => {
    let arrayOne = ['Loki', 'Odin', 'Frey'];
    let arrayTwo = arrayOne.length + pessoas.length;

    for (let i = arrayTwo; i > pessoas.length;) {
        return pessoas.push(arrayOne);
        
    }


};

Add()

console.log(pessoas);
