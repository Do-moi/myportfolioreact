import React from "react";
import "./myFooter.style.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© MARC DO &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;