

// SISTEMA DE CAMBIO

const divideMonto = (dinero) => {
    const pesos = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
    const result = {};

    for(let i = 0; i < pesos.length; i++){
        const peso = pesos[i];
        const PesosQ = Math.floor(dinero / peso);

        if(PesosQ > 0) {
            result[peso] = PesosQ;
            dinero = dinero % peso;
        }
    } return result
}

console.log(divideMonto(1000))