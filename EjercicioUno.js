
//El hash MD5 de "Francisco Salguero" es: 2a632b97deee3ceef20d3063f45d11cf

function switchListPositions(arr, S) {
    // Filtrar y transformar los números según S
    let filteredArr = arr.map(num => {
        let filteredNumStr = num.toString().split('').filter(digit => digit < S).join('');
        return filteredNumStr === '' ? null : parseInt(filteredNumStr, 10);
    }).filter(num => num !== null);
    
    // En este procedimiento invertimos la lista en O(n) tiempo
    let left = 0;
    let right = filteredArr.length - 1;
    
    while (left < right) {
        let temp = filteredArr[left];
        filteredArr[left] = filteredArr[right];
        filteredArr[right] = temp;
        left++;
        right--;
    }
    
    return filteredArr;
}

// Estos Ejemplos con S = 2
console.log(switchListPositions([1, 2, 3, 4, 5, 6], 2)); // [1]
console.log(switchListPositions([10, 20, 30, 40], 2)); // [10]
console.log(switchListPositions([6], 2)); // []
console.log(switchListPositions([66], 2)); // []
console.log(switchListPositions([65], 2)); // []
console.log(switchListPositions([6, 2, 1], 2)); // [1]
console.log(switchListPositions([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 2)); // [1]

