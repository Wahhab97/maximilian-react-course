import React, { useState } from "react";
import styles from "./Form.module.css";
import FormControl from "./FormControl";

const Form = ({ onSubmit, onReset }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    });
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setDuration("");
    setExpectedReturn("");
    setYearlyContribution("");

    onReset(null);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <FormControl
          text={"Current Savings ($)"}
          id={"current-savings"}
          type={"number"}
          value={currentSavings}
          setState={setCurrentSavings}
        />
        <FormControl
          text={"Yearly Savings ($)"}
          id={"yearly-contribution"}
          type={"number"}
          value={yearlyContribution}
          setState={setYearlyContribution}
        />
      </div>
      <div className={styles["input-group"]}>
        <FormControl
          text={"Expected Interest (%, per year)"}
          id={"expected-return"}
          type={"number"}
          value={expectedReturn}
          setState={setExpectedReturn}
        />
        <FormControl
          text={"Investment Duration (years)"}
          id={"duration"}
          type={"number"}
          value={duration}
          setState={setDuration}
        />
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
