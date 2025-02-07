  const memoizedResult = useMemo(() => {
    return expensiveCalculation(numbers);
  }, [numbers, multiplier]);
