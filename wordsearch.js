const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(letters => letters.join(''))
    for (letter of horizontalJoin) {
        if (letter.includes(word)) {
            return true;
        }
    }

    let vertical = transpose(letters);
    const verticalJoin = vertical.map(letters => letters.join(''));
    for (letter of verticalJoin) {
        if (letter.includes(word)) {
            return true;
        }
    }
    return false;
};

// const transpose = function (matrix) {
//     const newArrResult = matrix[0].map((columns, index) => matrix.map(rows => rows[index]))
//     // console.log(newArrResult);
//     // console.log(transpose);
//     return newArrResult;
// }

const transpose = function (matrix) {
    let output = [];
    //to access every element. Your first layer of loop with access each array and the nested loop will access each value of the array/
    for (let i = 0;i < matrix.length;i++) {
        for (let j = 0;j < matrix[i].length;j++) {
            if (output[j]) {
                output[j].push(matrix[i][j]);
            } else {
                output[j] = [];
                output[j].push(matrix[i][j]);
            }
        }
    }
    return output;
};

module.exports = wordSearch;