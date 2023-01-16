import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-center align-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
