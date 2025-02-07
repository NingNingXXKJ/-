  const expensiveCalculation = (nums) => {
    console.log('Performing expensive calculation...');
    return nums.reduce((acc, curr) => {
      // Simulate complex calculation
      let result = acc;
      for (let i = 0; i < 1000000; i++) {
        result += curr * multiplier;
      }
      return result;
    }, 0);
  };
