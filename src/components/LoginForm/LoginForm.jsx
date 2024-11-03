import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error("invalid credentials");
      });
    options.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        className="card-body"
      >
        <Form className={css.contactForm}>
          <div>
            <label className={css.formLabel}>
              <span className={css.headText}>Email</span>
              <Field
                name="email"
                type="email"
                placeholder="email"
                required
              />
            </label>
          </div>
          <div >
            <label className={css.formLabel}>
              <span className={css.headText}>Password</span>
              <Field
                name="password"
                type="current-password"
                placeholder="password"
                required
              />
            </label>
          </div>
          <div >
            <button className={css.btnAdd} type="submit" >
              Log In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
