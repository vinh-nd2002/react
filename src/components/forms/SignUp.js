import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required!";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 character or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required!";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 character or less";
//   }
//   return errors;
// };

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate, => viết validate bằng hàm riêng
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 character or less")
        .required("Required!"),
      lastName: Yup.string()
        .max(15, "Must be 15 character or less")
        .required("Required!"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-200 outline-none"
          // name="firstName"
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}

          // sử dụng formik.getFieldProps("field") để thay thế cho các phần bên trên
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <small className="text-red-500 text-sm">
            {formik.errors.firstName}
          </small>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-200 outline-none"
          // name="lastName"
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <small className="text-red-500 text-sm">
            {formik.errors.lastName}
          </small>
        ) : null}
      </div>
      <button className="w-full bg-blue-500 my-2 rounded font-bold text-white p-4">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
