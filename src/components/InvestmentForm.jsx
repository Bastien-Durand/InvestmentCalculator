import { useState } from "react";
import CalculateHandler from "./CalculateLogic";
import classes from "./InvestmentForm.module.css";

export const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState({
    current: "",
    yearly: "",
    interest: "",
    duration: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const valueToInt = parseInt(value);

    setUserInput((userInput) => ({
      ...userInput,
      [name]: valueToInt,
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const calculatedData = CalculateHandler(userInput);
    props.hoistUpFormData([calculatedData, userInput]);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="current"
            value={userInput.current}
            onChange={onChangeHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearly"
            value={userInput.yearly}
            onChange={onChangeHandler}
            required
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="interest"
            value={userInput.interest}
            onChange={onChangeHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={onChangeHandler}
            required
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={onChangeHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};
