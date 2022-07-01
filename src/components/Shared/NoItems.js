import React from "react";
import noItems from "../../media/no-items.svg";

const NoItems = () => {
  return (
    <div className="w-6/12 py-5 m-auto">
      <img src={noItems} alt="No Items" />
    </div>
  );
};

export default NoItems;
