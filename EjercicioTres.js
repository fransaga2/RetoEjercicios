function getMinimumChange(coins) {
    // Ordenar el array de monedas en orden ascendente
    coins.sort((a, b) => a - b);

    let currentChange = 0;

    // iteramos a través de cada moneda
    for (let coin of coins) {
        // Si la moneda actual es mayor que el cambio actual + 1, devolvemos el resultado
        if (coin > currentChange + 1) {
            return currentChange + 1;
        }
        // Si no, agregamos el valor de la moneda al cambio actual
        currentChange += coin;
    }

    // cuando iteramos a través de todas las monedas, devolvemos currentChange + 1
    return currentChange + 1;
}

// colocamos a pruebas de Ejemplos
console.log(getMinimumChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(getMinimumChange([1, 1, 1, 1, 1])); // 6
console.log(getMinimumChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
