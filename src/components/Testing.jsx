import React from "react";
import useBearStore from "../store/store";

const Testing = () => {
  const { isOpen, toggle } = useBearStore();

  return (
    <div className="w-full h-screen">
      <button onClick={toggle} className="text-4xl p-4 bg-white/50">
        Click Me
      </button>
      {isOpen && <h1>I exist</h1>}
    </div>
  );
};

export default Testing;
