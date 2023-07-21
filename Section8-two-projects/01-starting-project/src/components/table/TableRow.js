import React from "react";

const TableRow = ({
  year,
  savingsEndOfYear,
  interest,
  totalInterest,
  invested,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{savingsEndOfYear}</td>
      <td>{interest}</td>
      <td>{totalInterest}</td>
      <td>{invested}</td>
    </tr>
  );
};

export default TableRow;
