
    let pessoas = ['Aegir', 'Aud', 'Balder'];

    let Add = () => {
        let myPessoas = pessoas.push('Loki', 'Odin', 'Frey');
        
        return myPessoas;
    };

    Add()

    console.log(pessoas);

    /* NAo foi possivel imprimir o valor do array dentro da funcao
    pq ele sempre retornava a quantidade e nao os valores. Na verdade
    até esta certo pq o push() nao imprimi apenas adiciona e mostra a quantidade adicionada
    nesse caso tv apenas q chamar a funçao e imprimir com o log o nome do array inicial, pois ele ja foi modificado
    dentro da funcao após o seu chamamento.

    OBS: esse tipo de prática só funciona se o array for declarado com "let ou var",  pq
    sao tipos de variaveis q permitem serem modificadas, se declarares o array
    com const não poderas ver o valor da funcao a nao ser q vc chame ela de dentro da funcao
    pq de fora será sempre imprimida o valor inicial da funcao*/