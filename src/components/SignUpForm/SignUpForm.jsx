import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./SignUpForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values))
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.contactForm}>
          <label className={css.formLabel}>
            <span className={css.headText}>Name</span>
            <Field type="text" name="name" placeholder="name*" />
          </label>
          <label className={css.formLabel}>
            <span className={css.headText}>Email</span>
            <Field type="email" name="email" placeholder="email*" />
          </label>
          <label className={css.formLabel}>
            <span className={css.headText}>Password</span>
            <Field
              type="current-password"
              name="password"
              placeholder="password*"
            />
          </label>

          <button className={css.btnAdd} type="submit">
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
