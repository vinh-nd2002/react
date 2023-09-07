import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUpV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character or less")
          .required("Required!"),
        lastName: Yup.string()
          .max(15, "Must be 15 character or less")
          .required("Required!"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-200 outline-none"
          ></Field>
          <small className="text-red-500 text-sm">
            <ErrorMessage name="firstName" />
          </small>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-200 outline-none"
          ></Field>
          <small className="text-red-500 text-sm">
            <ErrorMessage name="lastName" />
          </small>
        </div>
        <button className="w-full bg-blue-500 my-2 rounded font-bold text-white p-4">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpV2;
