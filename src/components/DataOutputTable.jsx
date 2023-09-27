import classes from "./DataOutputTable.module.css";

export const DataOutputTable = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const [calculatedData, userInput] = props.data;
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data[0].map((e) => (
          <tr key={e.year}>
            <td>{e.year}</td>
            <td>{formatter.format(e.savingsEndOfYear)}</td>
            <td>{formatter.format(e.yearlyInterest)}</td>
            <td>
              {formatter.format(
                e.savingsEndOfYear -
                  userInput.current -
                  e.yearlyContribution * e.year
              )}
            </td>
            <td>
              {formatter.format(
                userInput.current + e.yearlyContribution * e.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
