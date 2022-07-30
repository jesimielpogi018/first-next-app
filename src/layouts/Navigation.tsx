import React, { useEffect } from "react";
import Link from "next/link";

import styles from "@styles/scss/Navigation.module.scss";

// eslint-disable-next-line no-undef
const Navigation = (): JSX.Element => {

   useEffect(() => {
      console.log(styles);
   });

   return (
      <>
         <nav className={styles.nav}>
            <Link href="/" className="hello-world">
               <a>Icon will go here</a>
            </Link>

            <div>
               
            </div>
         </nav>
      </>
   );
};

export default Navigation;