import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "../contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <header>{isAuthenticated && <Navbar />}</header>
      <main>{children}</main>
      <footer>{/* ... */}</footer>
    </>
  );
};

export default Layout;
