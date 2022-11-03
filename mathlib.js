module.exports = function () {
    return {
        add: function (num1, num2) {
            return num1 + num2;
        },
        multiply: function (num1, num2) {
            return num1 * num2;
        },
        square: function (num) {
            return Math.pow(num, 2);
        },
        random: function (num1, num2) {
            let max = num2 - num1 + 1;
            return Math.floor(Math.random() * max) + num1;
        }
    }
};

