import React from "react";
import { lock, logo } from "../../assets/exports";

const Footer = () => {
  return (
    <div className="text-[14px] flex items-center flex-col">
      <div className="flex items-center gap-[13px]">
        <img src={lock} alt="lock" />
        <div className="flex items-center gap-[4px]">
          <span className="font-[550px]">Secured by </span>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <span className="mt-[20px] text-[#65717C]">
        Do you have any questions, visit our website{" "}
        <a
          href="https://bani.africa/"
          target="blank"
          className="underline underline-offset-2"
        >
          bani.africa
        </a>
      </span>
    </div>
  );
};

export default Footer;
