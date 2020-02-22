
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];

    if (!matrix) {
        return [];
    } else {
        matrix.forEach( (el, index) => {
            if ((index + 1) % 2 === 0) {
                el.reverse().forEach( num => {
                    newArray.push(num);
                });
            } else {
                el.forEach( num => {
                    newArray.push(num);
                });
            }
        });

        return newArray;
    }
}
