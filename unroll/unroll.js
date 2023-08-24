function unroll(square) {
  const result = []; 
  
  while (square.length) {
    result.push(...square.shift()); // Move right
    square.forEach(row => row.length && result.push(row.pop())); // Move down
    square.length && result.push(...square.pop().reverse()); // Move left
    // Move up 
    for (let i = square.length - 1; i >= 0; i--) {
      if (square[i].length) {
        result.push(square[i].shift());
      }
    }
  }
  
  return result;
}

module.exports = unroll;
