import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.divForUsermenu}>
      <div className={css.divNav}>
        <NavLink to="/" className={css.headText}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.headText} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
