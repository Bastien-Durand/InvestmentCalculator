const calculateHandler = (userInput) => {
  const yearlyData = []; // per-year results

  let currentSavings = +userInput.current;
  const yearlyContribution = +userInput.yearly;
  const expectedReturn = +userInput.interest / 100;
  const duration = +userInput.duration;

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
  return yearlyData;
};

export default calculateHandler;
