import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, CardTitle } from "reactstrap";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  function emailHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes("@"));
  }
  function validatePasswordHandler() {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  return (
    <LoginScreen style={{ marginTop: "10%" }}>
      <Card className="card">
        <CardTitle className="cardTitle">Please Login</CardTitle>
        <form className="form" action="/">
          <label for="email">email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            size="30"
            value={enteredEmail}
            onChange={emailHandler}
            onBlur={validateEmailHandler}
            className={`${emailIsValid === false ? "inputInvalid" : ""}`}
          ></input>
          <label for="password">password</label>
          <input
            type="password"
            size="30"
            placeholder="enter password"
            minlength="5"
            value={enteredPassword}
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
            className={`${passwordIsValid === false ? "inputInvalid" : ""}`}
          ></input>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={!formIsValid}
          >
            Login
          </button>
        </form>
      </Card>
    </LoginScreen>
  );
}

export default Login;

const LoginScreen = styled.div`
  margin: auto;
  width: 400px;

  .card {
    padding: 20px;
    background-color: #990099;
    color: white;
    border-radius: 15px;
  }

  .cardTitle {
    font-size: 30px;
    font-weight: bold;
    font-family: monospace;
    padding-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    text-align: left;
    font-size: 14px;
    opacity: 0.8;
  }

  input {
    padding-top: 0px;
    margin: 12px;
    margin-top: 2px;
    border-color: white;
    border-width: 0px;
    border-radius: 5px;
    outline: none;
    height: 30px;
  }

  button {
    width: 100px;
    margin: auto;
    margin-top: 20px;
    background-color: grey;
    border-color: white;
  }

  .inputInvalid {
    background-color: red;
    outline: none;
  }
`;
