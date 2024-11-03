import { NavLink } from "react-router-dom";
import css from "./AuthNavigation.module.css";

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={css.headText}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={css.headText}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
