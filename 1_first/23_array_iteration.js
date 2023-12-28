// JS Nuggets
// Array iteration: 8 methods

// forEach
    [1,2,3].forEach(element => {
        //console.log(element);
    });

// map
    const three = [1,2,3];
    const double = three.map(function (item) {
        return item *2;
    });
    //console.log(double);
    // O map permite agarrar todos os item de um array duma vez só e manipula-los ou modifica-los a livre praser, sem tocar no array principal;

// filter
    const ints = [1,2,3];
    const evens = ints.filter(function (item) {
        return item % 2 === 0;
    });
    //console.log(evens);
    // o filter permite verificar arrays e selecionar os de condicoes verdadeiras para atribui-lo ao novo array criado


//reduce
    	const sum = [1,2,3].reduce(function (result, item) {
            return result + item;
        }, 0);
        // console.log(sum);

// some
        const hasNegativeNumbers = [1,2,3,-1,4].some(function (item) {
            return item < 0;
        });
        // console.log(hasNegativeNumbers);


// every
        const allPositiveNumbers = [1,2,3].every(function (item) {
           return item > 0; 
        })
        // console.log(allPositiveNumbers);


// find
        const objects = [{ id: 'a'}, { id: 'b' }, { id: 'c'}];
        const found = objects.find(function (item) {
            return item.id === 'b';
        });
        // console.log(found);


// find index
        const objects2 = [{ id: 'a'}, { id: 'b' }, { id: 'c'}];
        const foundIndex = objects2.findIndex(function (item) {
            return item.id === 'b';
        });
        console.log(foundIndex);