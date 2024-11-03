import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className={css.container}>
      <img
        className={css.imageBg}
        src="/public/Page404.jpeg"
        width={500}
        alt="Page Not Found"
      />
      <button onClick={goToHome} className={css.button}>
        Home
      </button>
    </div>
  );
};

export default NotFound;
