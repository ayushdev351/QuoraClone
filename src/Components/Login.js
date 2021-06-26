import React from "react";
import styled from "styled-components";
import { Card, CardTitle } from "reactstrap";

function Login() {
  return (
    <LoginScreen>
      <Card className="card">
        <CardTitle className="cardTitle">Please Login</CardTitle>
        <form className="form">
          <label for="email">email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            size="30"
          ></input>
          <label for="password">password</label>
          <input
            type="password"
            size="30"
            placeholder="enter password"
            minlength="5"
          ></input>
          <button className="btn btn-dark">Login</button>
        </form>
      </Card>
    </LoginScreen>
  );
}

export default Login;

const LoginScreen = styled.div`
  margin: auto;

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
    outline-color: white;
    height: 30px;
  }

  button {
    width: 100px;
    margin: auto;
    margin-top: 20px;
    background-color: grey;
    border-color: white;
  }
`;
