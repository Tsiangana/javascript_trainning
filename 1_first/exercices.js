

    // This is to train what I am learning

    // criei um algoritmo que calcula a media final de um aluno

    var nota1;
    var nota2;
    var nota3;

    function primeiroSemestre(mediaFinal) {
        nota1 = 20; nota2 = 14; nota3 = 16;
        mediaFinal = (nota1 + nota2 + nota3)/3;
        //return mediaFinal;

        classificacaoFinal = undefined;

        if (mediaFinal >= 10) {
            classificacaoFinal = [mediaFinal, "Apto com sucesso"]
            //console.log(classificacaoFinal)
        } else {
            classificacaoFinal = [mediaFinal, "Reprovado"]
            //console.log(classificacaoFinal)
        }
    }

    function segundoSemestre(mediaFinal2) {
        nota1 = 2; nota2 = 5; nota3 = 2;
        mediaFinal2 = (nota1 + nota2 + nota3)/3;
        //return mediaFinal;

        classificacaoFinal1 = undefined;

        if (mediaFinal2 >= 10) {
            classificacaoFinal1 = [mediaFinal2, "Apto com sucesso"]
            //console.log(classificacaoFinal1)
        } else {
            classificacaoFinal1 = [mediaFinal2, "Reprovado"]
            //console.log(classificacaoFinal1)
        }
    }

    function terceiroSemestre(mediaFinal3) {
        nota1 = 10; nota2 = 15; nota3 = 4;
        mediaFinal3 = (nota1 + nota2 + nota3)/3;
        //return mediaFinal;

        classificacaoFinal2 = undefined;

        if (mediaFinal3 >= 10) {
            classificacaoFinal2 = [mediaFinal3, "Apto com sucesso"]
            //console.log(classificacaoFinal2)
        } else {
            classificacaoFinal2 = [mediaFinal3, "Reprovado"]
            //console.log(classificacaoFinal2)
        }
    }


    primeiroSemestre();
    segundoSemestre();
    terceiroSemestre();

    function mediaFinalDoAno() {
        trimestreOne = classificacaoFinal[1];
        trimestreTwo = classificacaoFinal1[1];
        trimestreThree = classificacaoFinal2[1];

        var mensagem = "Passaste de ano, Parabens";
        var ligacao = "Reprovaste de ano, tenta no proximo ano...";
        var texto = "O seu caso ainda esta sendo avaliado, tente mais tarde...";

        if (trimestreOne == "Apto com sucesso" && trimestreTwo == "Apto com sucesso" && trimestreThree == "Apto com sucesso") {
            return mensage;
        }
        else if (trimestreOne == "Apto com sucesso" && trimestreTwo == "Apto com sucesso" && trimestreThree == "Reprovado") {
            return mensage;
        }
        else if (trimestreOne == "Apto com sucesso" && trimestreTwo == "Reprovado" && trimestreThree == "Apto com sucesso") {
            return mensage;
        }
        else if (trimestreOne == "Reprovado" && trimestreTwo == "Apto com sucesso" && trimestreThree == "Apto com sucesso") {
            return mensage;
        }
        else if (trimestreOne == "Reprovado" && trimestreTwo == "Reprovado" && trimestreThree == "Apto com sucesso") {
            return ligacao;
        }
        else if (trimestreOne == "Reprovado" && trimestreTwo == "Apto com sucesso" && trimestreThree == "Reprovado") {
            return ligacao;
        }
        else if (trimestreOne == "Reprovado" && trimestreTwo == "Reprovado" && trimestreThree == "Reprovado") {
            return ligacao;
        }
        else if (trimestreOne == "Reprovado" && trimestreTwo == "Apto com sucesso" && trimestreThree == "Reprovado") {
            return ligacao;
        }
        else if (trimestreOne == "Apto com sucesso" && trimestreTwo == "Reprovado" && trimestreThree == "Reprovado") {
            return ligacao;
        }else {
            return texto;
       }
    }

    console.log(mediaFinalDoAno());