import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({to, ...props}) => {
  return (
    <NavLink className="layout-nav" style={({ isActive }) => ({color: isActive ? '#ffffff' : '#000000'})} to={to} {...props}></NavLink>
  );
};

const Layout = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        OJA
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      > 
        <ul>
          <li>
            <CustomNavLink to="/" onClick={(() => {setIsNavExpanded(!isNavExpanded)})} end> Home </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/about" onClick={(() => {setIsNavExpanded(!isNavExpanded)})}> About </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/contact" onClick={(() => {setIsNavExpanded(!isNavExpanded)})}> Contact </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/repos" onClick={(() => {setIsNavExpanded(!isNavExpanded)})}> Repositories </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/error-test-page" onClick={(() => {setIsNavExpanded(!isNavExpanded)})}> Error Test Page </CustomNavLink>
          </li>
        </ul>  
      </div>
    </nav>
  )
}
export default Layout;