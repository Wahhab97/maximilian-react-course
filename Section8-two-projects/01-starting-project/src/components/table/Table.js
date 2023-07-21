import React from "react";
import styles from "./Table.module.css";
import TableRow from "./TableRow";

const Table = ({ yearlyData }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let totalInterest = [];
  let invested = [];
  if (yearlyData) {
    yearlyData.forEach((yearData, index) => {
      if (index === 0) {
        totalInterest.push(yearData.yearlyInterest);
        invested.push(yearData.yearlyContribution);
        return;
      }
      totalInterest.push(yearData.yearlyInterest + totalInterest[index - 1]);
      invested.push(yearData.yearlyContribution + invested[index - 1]);
    });
  }
  return (
    <table className={styles.result}>
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
        {yearlyData &&
          yearlyData.map((data, index) => {
            return (
              <TableRow
                key={data.year}
                year={data.year}
                savingsEndOfYear={formatter.format(data.savingsEndOfYear)}
                interest={formatter.format(data.yearlyInterest)}
                totalInterest={formatter.format(totalInterest[index])}
                invested={formatter.format(invested[index])}
              />
            );
          })}
        {!yearlyData && (
          <TableRow
            year={"YEAR NUMBER"}
            savingsEndOfYear={"TOTAL SAVINGS END OF YEAR"}
            interest={"INTEREST GAINED IN YEAR"}
            totalInterest={"TOTAL INTEREST GAINED"}
            invested={"TOTAL INVESTED CAPITAL"}
          />
        )}
      </tbody>
    </table>
  );
};

export default Table;
