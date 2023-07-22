import React, { useState } from "react";
import AddUser from "./components/addUser/AddUser";
import UsersList from "./components/usersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prev) => {
      return [
        ...prev,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
