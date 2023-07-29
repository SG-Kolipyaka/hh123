import React, { useState } from 'react';
import { loginuser } from "../Redux/AdminReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "../css/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const state1 = useSelector((store) => store.authreducer);

  const handelSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    dispatch(loginuser(userData));
    if (count > 0) {
      if (state1.isAuth === false) {
        alert("Invalid Credentials");
      }
    }
    
    setCount(count + 1);
    setEmail("");
    setPassword("");
  };

  if (state1.isAuth) {
    
    alert("Login Successful");
    return <Navigate to="/admin" />;
  } else {
    return (
<>
      
      <div className="container">
        
        <form className="form-container" onSubmit={handelSubmit}>
          <h1>Admin Login</h1>

          <label htmlFor="">Email:</label>
          <input type="text" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="">Password:</label>
          <input type="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button>Login</button>

        </form>
      </div></>
    );
  }
};

export default Login;


