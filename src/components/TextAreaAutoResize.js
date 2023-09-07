import React, { useLayoutEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleChange = (e) => {
    setTextareaHeight("auto");
    setText(e.target.value);
  };

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className="resize-none transition-all w-full max-w-[300px] overflow-hidden p-5 outline-none rounded-md border border-gray-400 focus:border-blue-600"
        placeholder="Nhập vào đây đi"
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
