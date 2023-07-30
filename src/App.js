import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage, usercollege) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random().toString(),
          name: username,
          age: userage,
          collegename: usercollege,
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
