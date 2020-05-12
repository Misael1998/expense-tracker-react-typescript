import React, { FC, useContext } from "react";
import { Transaction as TransactionType } from "../types/Transaction";
import { GlobalContext } from "../context/GlobalState";

interface Props {
  transaction: TransactionType;
}

export const Transaction: FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign: string = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
