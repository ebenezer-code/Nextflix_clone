import React from "react";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  return (
    <div className="bg-black p-6">
      <div className="footer-links py-10 md:py-16  max-w-[1170px] mx-auto">
        <p>Questions?Contact us.</p>
        <div className=" py-4 grid gap-3 md:grid-cols-4 lg:grid-cols-3">
          {links.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
        <div>
          <div className=" w-fit p-1 mb-4 rounded-md flex gap-2 items-center bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)]">
            <FaGlobe />
            English
          </div>
          <p>Netflix Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
