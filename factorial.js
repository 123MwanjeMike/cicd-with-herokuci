module.exports = {
  factorial: (number) => {
    let result = 1;
    if (number === 0 || number === 1) return result;
    for (let i = number; i >= 1; i -= 1) result *= i;
    return result;
  },
};
