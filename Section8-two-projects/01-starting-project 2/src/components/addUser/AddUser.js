import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../modals/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (Number(enteredAge) < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (value must be greater than 0)",
      });
      return;
    }
    onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onClose={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
