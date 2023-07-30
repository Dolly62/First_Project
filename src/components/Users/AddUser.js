import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  // //Use Ref
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  //Use State
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCollegeName, setEnteredCollegeName] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredUsername, enteredAge, enteredCollegeName);
    // const enteredName = nameInputRef.current.value;
    // const enteredUserAge = nameInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegeName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, age (non-empty values) and college name.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredCollegeName);
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredCollegeName("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const collegenameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);
  };

  // //Refs
  //   if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
  //     setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid name and age (non-empty values).",
  //     });
  //     return;
  //   }
  //   if (+enteredUserAge < 1) {
  //     setError({
  //       title: "Invalid age",
  //       message: "Please enter a valid age(> 0).",
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredName, enteredUserAge);
  //   nameInputRef.current.value = "";
  //   ageInputRef.current.value = "";
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="collegename">College name:</label>
          <input
            type="text"
            id="collegename"
            value={enteredCollegeName}
            onChange={collegenameChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>

        {/* Refs
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years):</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form> */}
      </Card>
    </div>
  );
};

export default AddUser;
