import React from "react";

const Button = ({ onClick }: any) => {
  function handleClick(event: any) {
    onClick(event.target);
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary w-[100px]">
        Add
      </button>
    </div>
  );
};

export default Button;
