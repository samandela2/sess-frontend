import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../services/api";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  setAuthState: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState(token);
    }
  }, []);

  const setAuthState = (token: string | null) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  const login = async (username: string, password: string) => {
    console.log("Logging in... \nUsername:", username, "\nPassword:", password);

    try {
      const response = await fetch(endpoints.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log("Response:", response);

      for (let [key, value] of response.headers.entries()) {
        console.log(`${key}: ${value}`);
      }

      const token = response.headers.get("Authorization")?.split(" ")[1];
      console.log("token:", token);
      if (token) {
        setAuthState(token);
        navigate("/home");
      } else {
        alert("Login name or password invalid");
        throw new Error("No token returned");
      }
    } catch (error) {
      console.error("Login failed:", error);
      logout();
    }

    // const token = "fakeToken";
    // setAuthState(token);
  };

  const logout = () => setAuthState(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
}
