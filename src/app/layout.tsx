import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.scss";

// Define an interface for props
interface LayoutProps {
  children: ReactNode; // Define children as ReactNode
}

// Root layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      {" "}
      {/* Required <html> tag with language attribute */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
