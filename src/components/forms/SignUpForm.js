import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        terms: false,
      }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(20, "Must be 20 character or less")
      //     .required("Required!"),
      //   lastName: Yup.string()
      //     .max(15, "Must be 15 character or less")
      //     .required("Required!"),
      //   email: Yup.string().email().required("Required!"),
      //   intro: Yup.string(),
      //   terms: Yup.boolean().oneOf([true], "Please check the terms"),
      // })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-10 w-full max-w-[500px] mx-auto">
          {/* <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-200 outline-none"
          ></Field>
          <small className="text-red-500 text-sm">
            <ErrorMessage name="firstName" />
          </small>
        </div> */}
          <MyInput
            label="First name"
            name="firstName"
            id="firstName"
            className="p-4 rounded-md border border-gray-200 outline-none"
            placeholder="Enter your first name"
          ></MyInput>
          {/* <div className="flex flex-col gap-2 mt-4">
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
        </div> */}
          <MyInput
            label="Last Name"
            name="lastName"
            id="lastName"
            className="p-4 rounded-md border border-gray-200 outline-none"
            placeholder="Enter your last name"
          ></MyInput>
          {/* <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="lastName">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-md border border-gray-200 outline-none"
          ></Field>
          <small className="text-red-500 text-sm">
            <ErrorMessage name="email" />
          </small>
        </div> */}
          <MyInput
            label="Email address"
            name="email"
            id="email"
            type="email"
            className="p-4 rounded-md border border-gray-200 outline-none"
            placeholder="Enter your email"
          ></MyInput>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="intro">Introduce yourself</label>
            <Field
              name="intro"
              type="text"
              placeholder="Enter your introduce"
              className="p-4 rounded-md border border-gray-200 outline-none h-[150px] resize-none"
              as="textarea"
            ></Field>
            <small className="text-red-500 text-sm">
              <ErrorMessage name="intro" />
            </small>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="job">Select your job</label>
            <Field
              name="job"
              className="p-4 rounded-md border border-gray-200 outline-none"
              as="select"
            >
              <option value="php">PHP</option>
              <option value="js">JS</option>
              <option value="java">Java</option>
              <option value="c">C</option>
            </Field>
            <small className="text-red-500 text-sm">
              <ErrorMessage name="job" />
            </small>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2">
              <Field
                name="terms"
                type="checkbox"
                className="p-4 rounded-md border border-gray-200 outline-none "
              ></Field>
              <p>I accept</p>
            </div>
            <small className="text-red-500 text-sm">
              <ErrorMessage name="terms" />
            </small>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 my-2 rounded font-bold text-white p-4"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

const MyInput = ({ label, type = "text", ...props }) => {
  // cách này cho biết là field sẽ trả về 1 mảng gồm 3 phần tử:
  // index 0 dùng để setValue, index 1 dùng để xử lý error, validate

  // const field = useField(props);
  // return (
  //   <div className="flex flex-col gap-2 mt-4">
  //     <label htmlFor={props.id || props.name}>{label}</label>
  //     <input type="text" {...props} {...field[0]} />
  //     {field[1].touched && field[1].error ? (
  //       <small className="text-red-500 text-sm">{field[1].error}</small>
  //     ) : null}
  //   </div>
  // );

  // cách viết này giúp cho clean code hơn
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type={type} {...props} {...field} />
      {meta.touched && meta.error ? (
        <small className="text-red-500 text-sm">{meta.error}</small>
      ) : null}
    </div>
  );
};

export default SignUpForm;
