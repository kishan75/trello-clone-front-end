import { ErrorMessage, Field, Form, Formik } from "formik";
import { React } from "react";
import * as Yup from "yup";
import { signIn } from "./authservice";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => signIn(values)}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
    >
      <Form>
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

export default Login;
