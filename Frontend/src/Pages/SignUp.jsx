import React, { useState } from 'react';
import { registeruser } from '../Redux/AdminReducer/action';
import { useDispatch } from "react-redux";
import "../css/signup.css"

const initialState = {
  name: "",
  email: "",
  password: "",
  avatar: ""
};

const SignUp = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(registeruser(data));
    console.log(data);
    alert("User Registered Successfully");
    setData(initialState);
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handelSubmit}>
        <h1>Sign Up</h1>

        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={data.name} placeholder='Enter Your Name' onChange={handelChange} /> <br />
        <label htmlFor="">Avatar:</label>
        <input type="text" name="avatar" value={data.avatar} placeholder='Enter Your Avatar' onChange={handelChange} /> <br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" value={data.email} placeholder='Enter Your Email' onChange={handelChange} /> <br />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" value={data.password} placeholder='Enter Your Password' onChange={handelChange} /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;



