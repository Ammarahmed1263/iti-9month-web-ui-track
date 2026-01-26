function getMinMax(...numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

const prices = [5, 12 , 10, 1, 22];
const { min, max } = getMinMax(...prices);

console.log(`Minimum value is ${min} while Maximum value is ${max}`);