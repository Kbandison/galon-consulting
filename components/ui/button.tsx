import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="p-[3px] my-8 relative scale-150 tablet:scale-110 w-full tablet:w-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-char to-butn rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-background hover:bg-transparent">
          {props.title}
        </div>
      </button>
    </div>
  );
};

export default Button;
