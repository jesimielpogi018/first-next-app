import { NextComponentType } from "next";
import React from "react";
import styles from "./Navigation.module.scss";

const Navigation: NextComponentType = () => {
   return (
      <div data-class="landing-navigation" className={styles.nav}>
         <h1>Hello World</h1>
         <div data-class="nav-link-container" className={styles.nav_container}>
            <a href="#">Sample</a>
            <a href="#">Sample</a>
            <a href="#">Sample</a>
            <a href="#">Sample</a>
         </div>
      </div>
   );
}

export default Navigation;