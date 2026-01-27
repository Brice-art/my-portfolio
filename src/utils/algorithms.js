/**
 * Bubble Sort Algorithm Steps
 * Generates step-by-step breakdown of sorting process
 */
export const bubbleSortSteps = (arr) => {
  const steps = [];
  const tempArray = [...arr];
  const n = tempArray.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...tempArray],
        comparing: [j, j + 1],
        sorted: Array.from({ length: n - i }, (_, k) => n - 1 - k),
        action: `Compare ${tempArray[j]} and ${tempArray[j + 1]}`
      });
      
      if (tempArray[j] > tempArray[j + 1]) {
        [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
        steps.push({
          array: [...tempArray],
          comparing: [j, j + 1],
          sorted: Array.from({ length: n - i }, (_, k) => n - 1 - k),
          action: `Swap: ${tempArray[j + 1]} > ${tempArray[j]}`
        });
      }
    }
  }
  
  steps.push({
    array: tempArray,
    comparing: [],
    sorted: Array.from({ length: n }, (_, i) => i),
    action: 'Sorted!'
  });
  
  return steps;
};
