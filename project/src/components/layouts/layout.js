import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

/**
 * This layout would set the default layout to be used for all other pages on the application
 * @param {children} children: Other pages will enter as component parameters
 * @returns It return the UI of our SPA
 */
const Layout = () => {
  // const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      {/* TODO: find out why the Header and Nav components do not display in other outlets. Whereas the footer displays*/}
      <div>
        <Outlet />
        {/* <div>{children}</div> */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
