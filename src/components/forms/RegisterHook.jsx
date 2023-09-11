import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputHook from "../inputs/InputHook";
import RadioHook from "../radios/RadioHook";
import CheckboxHook from "../checkboxs/CheckboxHook";
import DropdownHook from "../dropdowns/DropdownHook";

const dropdownData = [
  {
    id: 1,
    title: "Teacher",
    value: "teacher",
  },
  {
    id: 2,
    title: "Developer",
    value: "developer",
  },
  {
    id: 3,
    title: "Tester",
    value: "tester",
  },
  {
    id: 4,
    title: "Doctor",
    value: "doctor",
  },
  {
    id: 5,
    title: "Police",
    value: "police",
  },
];

const schema = Yup.object({
  username: Yup.string().required("Không được bỏ trống"),
  email: Yup.string()
    .email("Không đúng định dạng")
    .required("Không được bỏ trống"),
  password: Yup.string()
    .required("Không được bỏ trống")
    .min(8, "Tối thiểu phải 8 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Mật khẩu phải ít nhất 1 ký tự thường, 1 ký tự hoa, 1 chữ số và 1 ký tự đặc biệt"
    ),
  gender: Yup.string()
    .required("Vui lòng chọn giới tính")
    .oneOf(["male", "female"], "Chỉ được chọn nam hoặc nữ"),
  job: Yup.string().required("Vui lòng chọn nghề nghiệp của bạn"),
  terms: Yup.boolean().required("Vui lòng xác nhận điều khoản"),
}).required();

const RegisterHook = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      gender: "male",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const watchGender = watch("gender");

  const onSubmitHandler = (values) => {
    console.log(values);
    if (!isValid) return;
    if (!values.terms) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(
          "🚀 ~ file: RegisterHook.jsx:72 ~ onSubmitHandler ~ values:",
          values
        );
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          terms: false,
        });
      }, 5000);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[400px] mx-auto my-10"
    >
      <div className="mb-2 flex flex-col gap-2">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          control={control}
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username"
          className="transition-all duration-300 outline-none p-2 border border-gray-300 rounded focus:border-blue-500"
        ></InputHook>
        {errors.username && (
          <small className="text-red-500 text-sm">
            {errors.username.message}
          </small>
        )}
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          control={control}
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="transition-all duration-300 outline-none p-2 border border-gray-300 rounded focus:border-blue-500"
        ></InputHook>
        {errors.email && (
          <small className="text-red-500 text-sm">{errors.email.message}</small>
        )}
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          control={control}
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="transition-all duration-300 outline-none p-2 border border-gray-300 rounded focus:border-blue-500"
        ></InputHook>
        {errors.password && (
          <small className="text-red-500 text-sm">
            {errors.password.message}
          </small>
        )}
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <small className="text-red-500 text-sm">
            {errors.gender.message}
          </small>
        )}
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <label className="cursor-pointer">Are you?</label>
        <DropdownHook
          name="job"
          control={control}
          setValue={setValue}
          data={dropdownData}
          dropdownContent="Select job"
        ></DropdownHook>
        {errors.job && (
          <small className="text-red-500 text-sm">{errors.job.message}</small>
        )}
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="terms"
          id="terms"
        ></CheckboxHook>
        {errors.terms && (
          <small className="text-red-500 text-sm">{errors.terms.message}</small>
        )}
      </div>
      <button
        className={`w-full bg-blue-600 rounded p-4 text-white font-bold mt-4"
        type="submit ${isSubmitting ? "opacity-70" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 animate-spin  border-2 border-t-transparent  border-white rounded-full mx-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
