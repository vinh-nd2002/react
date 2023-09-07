import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(divRef.current);
    // if (divRef.current) divRef.current.style.color = "red";
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div ref={divRef}>
      <input
        ref={inputRef}
        className="inline-block p-4 outline-none border border-red-500 focus:border-blue-500"
        placeholder="Auto focus input"
      />
    </div>
  );
};

export default Input;
