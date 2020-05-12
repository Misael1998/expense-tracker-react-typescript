import React, { FC, useState, useContext } from "react";
import { Transaction as TransactionType } from "../types/Transaction";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction: FC = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 100000000),
      amount,
      text
    };

    addTransaction(newTransaction);
  };

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => {
              setAmount(Number(e.target.value));
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </React.Fragment>
  );
};
