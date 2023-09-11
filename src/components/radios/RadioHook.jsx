import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input type="radio" className="hidden" {...field} {...props} />
      <div className="bg-white rounded-full h-full w-full"></div>
    </label>
  );
};

export default RadioHook;
