import React from "react";

import styles from "@styles/modules/Container.module.scss";

class Container extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
   }


   render() {
      return (
         <div className={styles.container}>
            {this.props.children}
         </div>
      );
   }
}

export default Container;