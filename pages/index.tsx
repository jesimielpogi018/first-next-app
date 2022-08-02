/* eslint-disable curly */
import React, { Component } from "react";
import styles from "@styles/scss/Landing-page.module.scss";
import Head from "next/head";
import Link from "next/link";

// eslint-disable-next-line no-unused-vars
const componentDidMountOnRun = {
   didWidthCheckerMounted: false,
};

// component/s
import Container from "@layouts/Container";

const checkWidth = (): boolean => !(innerWidth >= 1100);

function mountWidthChecker(obj: Home) {
   function monitorWidth() {
      const { navBarShown } = obj.state;

      const isValidSize = checkWidth();

      if (isValidSize) {
         if (navBarShown === isValidSize) return;

         obj.setState({ navBarShown: true });
      } else {
         if (navBarShown === isValidSize) return;

         obj.setState({ navBarShown: false });
      }

      console.log(obj.state.navBarShown);
   }

   if (!componentDidMountOnRun.didWidthCheckerMounted) {
      window.onresize = monitorWidth;

      window.onload = monitorWidth;

      componentDidMountOnRun.didWidthCheckerMounted = true;
   }
}

class Home extends Component<any, any> {
   state = {
      navBarShown: false,
   };

   constructor(props: any) {
      super(props);

      this.handleBind();
   }

   componentDidMount() {
      mountWidthChecker(this);
   }

   handleBind() {
      this.handleNavBarDisplay = this.handleNavBarDisplay.bind(this);
   }

   handleNavBarDisplay() {}

   render() {
      return (
         <>
            <Head>
               <title>Home</title>
            </Head>

            <header className={styles.header}>
               <nav className={styles.nav}>
                  <Container>
                     <Link href="/">
                        <a>
                           <h1 className={styles.header_logo}>CubeCodeX</h1>
                        </a>
                     </Link>

                     <div className={styles.nav_container}>
                        <Link href="">
                           <a>Docs</a>
                        </Link>
                        <Link href="">
                           <a>Community</a>
                        </Link>
                        <Link href="">
                           <a>Contribute</a>
                        </Link>
                        <Link href="">
                           <a>Donate</a>
                        </Link>
                        <Link href="">
                           <a className={styles.sign_up}>Sign In</a>
                        </Link>
                     </div>

                     <div className={styles.icons}>
                        <p>Test</p>
                     </div>
                  </Container>
               </nav>
            </header>

            <main className={styles.main}>
               <section className={styles.landing_page}>
                  <div className={styles.landing_texts}>
                     <h1>Web Development Made It Easy!</h1>

                     <p>
                        Dive in the new Library which provides skillful and
                        resourceful management towards code which follows Jquery{" "}
                        {'"Write Less, do more"'}
                     </p>

                     <button className={`${styles.cta} btn btn-primary`}>
                        Learn More...
                     </button>
                  </div>

                  <div className={styles.landing_images}></div>
               </section>

               <section className={styles.fold}></section>

               <section className={styles.persona}></section>

               <section className={styles.contact_info}></section>
            </main>

            <footer className={styles.footer}>
               <h1></h1>

               <div className={styles.footer_link_container}>
                  <div className={styles.footer_container}></div>
               </div>

               <p className={styles.ending}></p>
            </footer>
         </>
      );
   }
}

export default Home;
