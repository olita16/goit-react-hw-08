import React from "react";
import css from "./HomePage.module.css"


const HomePage = () => {
  return (
    <div>
      <img className={css.imageBg} src="/images/Phone-bg.jpg" width={500} alt="Managing contacts" />
    </div>
  );
};

export default HomePage;
