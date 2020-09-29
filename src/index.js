
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((acc, element, index) => {
    if(index%2 !== 0) element.sort((a, b) => b - a);
    element.forEach(num => acc.push(num))
    return acc;
  }, []) : [];
}
