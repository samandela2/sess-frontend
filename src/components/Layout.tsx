import Navbar from "./Navbar";
import { useAuth } from "../contexts/AuthContext";
import { Container } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;

  return (
    <>
      <header>{isAuthenticated && <Navbar />}</header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>{/* ... */}</footer>
    </>
  );
};

export default Layout;
