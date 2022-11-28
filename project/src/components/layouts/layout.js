import Button from "../commons/button";
import Footer from "./footer";
import Header from "./header";

/**
 * This layout would set the default layout to be used for all other pages on the application
 * @param {children} children: Other pages will enter as component parameters
 * @returns It return the UI of our SPA
 */
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Button btnText="Submit" />
        <Footer />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
