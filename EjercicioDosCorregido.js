/*
2. Código del segundo reto
Escribe una función que tome una matriz no vacía de enteros ordenados en orden ascendente y devuelva una nueva matriz de la misma longitud con los cuadrados de los enteros originales también ordenados en orden ascendente. Si el número de salida está fuera del rango [0, SS] (para S=6 el rango será [0, 66]), lo borrará del array de salida. Por favor, no utilice la ordenación incorporada de su lenguaje.
Ejemplos con S=6:
> {"array": [1, 2, 3, 5, 6, 8, 9]} -> [1, 4, 9, 25, 36, 64]
> {"array": [-2, -1]} -> [1, 4]
> {"array": [-6, -5, 0, 5, 6]} -> [0, 25, 25, 36, 36]
> {"array": [-10, 10]} -> []

Traducción realizada con la versión gratuita del traductor DeepL.com

*/


function sortedSquaredArray(array, S) {
    // Aqui convertimo la S a una cadena, lo concatenamos consigo mismo y luego lo convertimos de nuevo a un número
    const rangeMax = parseInt(`${S}${S}`);
    const n = array.length; // Obtenemos la longitud del array
    let result = new Array(n).fill(0); // Inicializamos el array de resultado con ceros
    let left = 0; // Puntero inicial
    let right = n - 1; // Puntero final

    // Contador para la posición en el array de resultado
    let position = n - 1;

    // Mientras que left sea menor o igual que right
    while (left <= right) {
        let leftSquare = array[left] * array[left];
        let rightSquare = array[right] * array[right];

        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }
        position--;
    }

    // Filtramos los resultados que estén fuera del rango [0, rangeMax]
    result = result.filter(num => num >= 0 && num <= rangeMax);
    
    return result;
}
 //Colocando a prueba 
console.log(sortedSquaredArray([3, 7, 9, 10, 20, 2], 6)); // [1, 4, 9, 25, 36]
console.log(sortedSquaredArray([-2, -1], 6)); // [1, 4]
console.log(sortedSquaredArray([-6, -5, 0, 5, 6], 6)); // [0, 25, 25, 36, 36]
console.log(sortedSquaredArray([-10, 10], 6)); // []