import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({ control, setValue, name, data, dropdownContent }) => {
  const { show, nodeRef, setShow } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: name,
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setContent(e.target.textContent);
  };

  const [content, setContent] = useState(dropdownContent);

  useEffect(() => {
    if (dropdownValue === "") {
      setContent(dropdownContent);
    }
  }, [dropdownValue]);
  return (
    <div className="relative cursor-pointer" ref={nodeRef}>
      <div
        className="p-5 rounded border border-gray-200 bg-white flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <span>{content}</span>
      </div>
      <div
        className={`rounded absolute top-full left-0 w-full bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="p-2 hover:bg-blue-200"
            onClick={handleClickDropdownItem}
            data-value={item.value}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;
