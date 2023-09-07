import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// sử dụng react-hook-form thay cho formik
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Khổng bỏ trống đâu nhá")
    .max(10, "Dài quá thým ơi"),
});

const SignUpHook = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isDirty,
      dirtyFields,
      submitCount,
    },
    control,
    setFocus,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  const watchShowAge = watch("showAge", false);
  // const watchFirstName = watch("firstName", "");

  // console.log(watchShowAge);
  // console.log(watchFirstName);

  // console.log(formState)

  // errors = formState.errors
  // console.log("errors", errors);

  // console.log("submitCount", submitCount);
  // if (submitCount >= 3) {
  //   alert("quá số lần quy định rồi 3 ơi");
  // }

  // console.log("isSubmitting", isSubmitting);
  // console.log("isValid", isValid);
  const onSubmit = async (values) => {
    // call API
    if (isValid) {
      // nếu như validate đã pass => call API

      console.log(values);
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve();
      //     console.log(values);
      //   }, 5000);
      // });

      // sau khi submit thành công
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200 outline-none"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
        />

        {errors?.firstName && (
          <small className="text-red-500">{errors.firstName.message}</small>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <small className="text-red-500">Dài quá thým ơi </small>
        )} */}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200 outline-none"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-200 outline-none"
          {...register("email")}
        /> */}
      </div>
      <div className="flex my-2">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            {...register("age")}
            placeholder="Nhập tuổi của bạn"
            className="border border-gray-200 outline-none p-2"
          />
        )}
      </div>
      <button className="w-full bg-blue-500 my-2 rounded font-bold text-white p-4">
        {isSubmitting ? (
          <div className="mx-auto w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default SignUpHook;

// sử dụng Controller để có thể custom lai component, dễ tái sử dụng

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       control={control}
//       name={props.name}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-200 outline-none"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

// dùng useController cũng giống Controller nhưng dễ dùng hơn

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-200 outline-none"
      {...field}
      {...props}
    />
  );
};
