import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../../styles/layout/Layout.module.css";

function Layout( {children} ) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
