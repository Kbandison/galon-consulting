import React from "react";
import Button from "./ui/button";
import { TextEffect } from "./Text-title";

const ButtonsBar = () => {
  return (
    <div className="p-16 flex flex-col justify-center items-center ">
      <TextEffect caption="Our Services and What We Do" />
      <div className="flex flex-col leading-10 justify-between tablet:flex-row tablet:gap-8 desktop:gap-24">
        <Button title="Billing and Revenue" />
        <Button title="Healthcare Consulting" />
        <Button title="Patient Care" />
        <Button title="Healthcare I" />
      </div>
    </div>
  );
};

export default ButtonsBar;
