import React from "react";
import styles from "./style.module.css";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks } from "../../assets/MockData";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-6">
            {NavbarLinks.map(({ id, title, to }) => {
              return (
                <NavLink className={styles.link} to={to} key={id}>
                  {title}
                </NavLink>
              );
            })}
            <Link to="/" className={styles.contactBtn}>Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
