import { ErrorMessage, Field, Form, Formik } from "formik";
import { React } from "react";
import * as Yup from "yup";
import { signup } from "./authservice";

const Signup = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => signup(values)}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text"></Field>
        <ErrorMessage name="name" /> <br /> <br />
        <label htmlFor="email">Email</label>
        <Field name="email" type="text"></Field>
        <ErrorMessage name="email" /> <br /> <br />
        <label htmlFor="Password">Password</label>
        <Field name="password" type="password"></Field>
        <ErrorMessage name="password" /> <br /> <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Signup;
