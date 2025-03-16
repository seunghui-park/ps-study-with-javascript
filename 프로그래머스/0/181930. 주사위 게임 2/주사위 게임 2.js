function solution(a, b, c) {
    const sum = a + b + c;
    const sumSquares = a ** 2 + b ** 2 + c ** 2;
    const sumCubes = a ** 3 + b ** 3 + c ** 3;

    if (a === b && b === c) {
        return sum * sumSquares * sumCubes;
    } else if (a === b || b === c || a === c) {
        return sum * sumSquares;
    } else {
        return sum;
    }
}