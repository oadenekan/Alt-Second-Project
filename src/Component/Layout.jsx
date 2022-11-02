import React from "react";
import { nav, NavLink } from "react-router-dom";

const CustomNavLink = ({to, ...props}) => {
  return (
    <NavLink style={({ isActive }) => ({color: isActive ? 'red' : 'black'})} to={to} {...props}></NavLink>
  );
};

const Layout = () => {
  return (
    <nav>   
      <CustomNavLink to="/" end> Home </CustomNavLink>| {' '}
      <CustomNavLink to="about"> About </CustomNavLink>| {' '}
      <CustomNavLink to="contact"> Contact </CustomNavLink>| {' '}
      <CustomNavLink to="repos"> Repositories </CustomNavLink>| {' '}
      <CustomNavLink to="error-test-page"> Error Test Page </CustomNavLink>
    </nav>
  )
}
export default Layout;