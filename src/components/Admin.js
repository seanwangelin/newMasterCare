import React, { useState, useEffect } from "react";

export default function Admin({ adminLoggedIn }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
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
      console.log("RESULT:", result);

      localStorage.setItem("username", result.user.username);

      return result;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log(adminLoggedIn);
  });

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
