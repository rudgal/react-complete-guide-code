import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Card</HeaderCartButton>
      </header>
      <div className={classes["mainImage"]}>
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
