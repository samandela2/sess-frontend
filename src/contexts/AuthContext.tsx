import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

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

  const setAuthState = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.token) {
        setAuthState(data.token);
      } else {
        throw new Error("No token returned");
      }
    } catch (error) {
      console.error("Login failed:", error);
      logout();
    }
  };

  // if (response.ok) {
  //   setIsAuthenticated(true);
  //   if (
  //     response.headers.get("content-type")?.includes("application/json")
  //   ) {
  //     const data = await response.json();
  //     console.log("Login Successful:", data.message, data.jwt);
  //   } else {
  //     console.log("Response not JSON");
  //   }
  //   navigate("/home");
  // } else {
  //   setIsAuthenticated(false);
  //   const errorData = await response.json();
  //   console.error("Login failed.");
  // }
  // }, []);
  const logout = () => setAuthState("");

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
}
