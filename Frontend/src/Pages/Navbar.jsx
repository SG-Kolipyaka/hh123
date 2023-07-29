import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"
import {  useSelector } from "react-redux";




const Navbar = () => {
  const state1 = useSelector((store) => store.authreducer);
  const Links = [
    { path: '/', title: 'Home' },
    { path: '/login', title: state1.isAuth==false?"Login":"Active" },
    { path: '/signup', title: 'SignUp' },
    { path: '/admin', title: 'Admin' },
  ];
  return (
    <div className="nav1">
      <div className="logo">
        <span className="logo-icon">🦉</span>
        <span className="logo-text">grayowl</span>
      </div>
      <div className="nav-links">
        {Links.map((el) => {
          return (
            <NavLink key={el.path} to={el.path}>
              {el.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
