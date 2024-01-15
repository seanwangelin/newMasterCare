import React, { useState, useEffect } from "react";

export default function Admin({ adminLoggedIn, setAdminLoggedIn, DB }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${DB}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      const result = await response.json();

      localStorage.setItem("username", result.user.username);
      setAdminLoggedIn(true);

      return result;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {adminLoggedIn === true ? (
        <div>logged in </div>
      ) : (
        <form onSubmit={(event) => loginUser(event)}>
          <div>LOGIN HERE</div>
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}
