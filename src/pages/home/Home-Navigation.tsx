import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import React from "react";

import styles from "../../../styles/modules/Home-Nav.module.scss";

const checkWidth = () => (innerWidth >= 768);

function convertString(value: boolean) {
   return (value ? "true" : "false");
}

function watchWindowWidth(callback: Function) {
   window.onresize = () => {
      if (checkWidth()) {
         callback(true);
      } else {
         callback(false);
      }
   };

   window.onload = () => {
      if (checkWidth()) {
         callback(true);
      } else {
         callback(false);
      }
   };
}

interface Props {

}

const Navigation: NextPage<Props> = () => {
   const [isDisplayed, setDisplay] = useState<boolean>(false);

   useEffect(() => {
      watchWindowWidth(setDisplay);
   }, []);

   return (
      <>
         <nav className={styles.nav} data-display={convertString(isDisplayed)}>
            <h1>Hello World!</h1>
         </nav>
      </>
   );
};

export default Navigation;
