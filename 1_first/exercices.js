

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
        nota1 = 16; nota2 = 12; nota3 = 10;
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
        nota1 = 19; nota2 = 20; nota3 = 4;
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
        classificacaoFinal[1];
        classificacaoFinal1[1];
        classificacaoFinal2[1];

        if (condition) {
            
        }if (condition) {
            
        } else {
            
        }
    }

    mediaFinalDoAno()