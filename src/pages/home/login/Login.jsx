import React, { useRef } from "react";
import "./login.css";
import Home from "../Home";

export default function Login() {
  const userId = useRef();
  const password = useRef();
  const getUserId = localStorage.getItem("userIdData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (userId.value === "1" && password.value === "1111") {
      localStorage.setItem("userIdData", "1");
      localStorage.setItem("passwordData", "1111");
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      {getUserId && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit} className="loginForm">
          <label>User ID</label>
          <input
            type="text"
            ref={userId}
            className="loginInput"
            placeholder="Enter your User ID"
          />
          <label>Password</label>
          <input
            type="password"
            ref={password}
            className="loginPass"
            placeholder="Enter your password"
          />
          <div className="loginButton" role="button">
            LOGIN
          </div>
        </form>
      )}
    </div>
  );
}
