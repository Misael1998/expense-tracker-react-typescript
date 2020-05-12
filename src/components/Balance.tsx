import React, { FC, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction as TransactionType } from "../types/Transaction";

export const Balance: FC = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts: number[] = transactions.map(
    (transaction: TransactionType) => transaction.amount
  );
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </React.Fragment>
  );
};
