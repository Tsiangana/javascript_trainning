
    function verificandoIdade(ano_nas, ano_corrent) {
        let idade = ano_corrent - ano_nas;

        if (ano_nas > ano_corrent) {
            return "Impossível achar idade, verifique se as datas estao correctas ou se foram trocadas."
        }else{
            if (idade >= 18) {
                return idade + " anos é maior de idade";
            }else {
                return idade + " é menor de idade, venha quando tiver: 18 anos ou mais"; 
            }
        }

    }

    console.log(verificandoIdade(2003, 2010));