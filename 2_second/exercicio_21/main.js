
    const valor_desconto = 5;

    function desconto(valor) {
        resultado = (valor * valor_desconto)/100;
        return "O seu desconto é de: " + resultado;
    }

    console.log(desconto(1000));