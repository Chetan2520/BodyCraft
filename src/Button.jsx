import React from "react";

const Button = (props) => {
  return (
    <button
      className="text-lg h-12 font-normal relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700 bounce-button"
    >
      {props.Button}
    </button>
  );
};

export default Button;
