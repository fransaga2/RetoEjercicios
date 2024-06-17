function sortedSquares(nums, S) {
    const maxRange = S * S;
    const result = [];
    
    let left = 0;
    let right = nums.length - 1;
    const squares = new Array(nums.length);
    let index = nums.length - 1;

    // con estos dos punteros para encontrar el mayor cuadrado desde ambos extremos
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            squares[index--] = leftSquare;
            left++;
        } else {
            squares[index--] = rightSquare;
            right--;
        }
    }

    // En este paso se realiza para ver los resultados que no están en el rango [0, S * S]
    for (let square of squares) {
        if (square <= maxRange) {
            result.push(square);
        }
    }

    return result;
}

// Ejemplos de pruebas con S = 2
console.log(sortedSquares([1, 2, 3, 5, 6, 8, 9], 2)); // [1, 4]
console.log(sortedSquares([-2, -1], 2)); // [1, 4]
console.log(sortedSquares([-6, -5, 0, 5, 6], 2)); // [0, 4]
console.log(sortedSquares([-10, 10], 2)); // []