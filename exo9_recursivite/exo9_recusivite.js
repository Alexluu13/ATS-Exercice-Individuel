function sum1 (array) {

    let myNumbers = [1, 2, 3, 4, 5];
    let sum = 0; // the sum is initialed to 0

    for (let i = 0; i < myNumbers.length; i+=1) {
        sum += myNumbers[i]; // take every item in the array and add it to sum variable 
    }
    return sum;
}

// console.log(sum1([1, 2, 3, 4, 5]))

// Etape 2
function sum2(array) {
    if (array.length === 0) {
    	return 0;
    } else {
    	return array[0] + sum2(array.slice(1));
    }
}

// Etape 3
function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

// Etape 4
function fibonacci(x) {
		if (x < 2) {
				return x;
		} else {
				return fibonacci(x-1) + fibonacci(x-2)
		}
}