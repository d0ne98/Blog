import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {
     const [user, setUser] = useState(null);

     useEffect(() => {
  async function checkAuthStatus() {
    try {
      const response = await axios.get("http://localhost:3001/api/auth/status", {
        withCredentials: true
      });
      if (response.data.isAuthenticated) {
        setUser(response.data.user);
      }
    } catch (err) {
      console.error("Auth status check failed:", err);
    }
  }
  
  checkAuthStatus();
}, []);

     async function login(username, password) {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", {username, password}, {withCredentials: true});
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            throw err;
        }
     }

     async function logout() {
        try {
      await axios.post("http://localhost:3001/api/auth/logout", {}, {
        withCredentials: true
      });
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
     }
    async function register(username, password) {
        
     try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { username, password },{withCredentials: true}
      );
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
  
const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register
  };
 return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
