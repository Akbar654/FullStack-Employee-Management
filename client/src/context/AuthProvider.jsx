import { createContext, useEffect, useState } from "react";
import api from "../api/axios";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  // inside AuthProvider
  useEffect(() => {

    const loadUser = async () => {

      const token = localStorage.getItem("token");

      if (!token) return;

      try {

        const response = await api.get("/auth/profile");

        setUser(response.data.data);

      } catch {

        localStorage.removeItem("token");

      }

    };

    loadUser();

  }, []);

  const login = (token) => {

    localStorage.setItem("token", token);

  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);

  };

  return (

    <AuthContext.Provider

      value={{

        user,

        setUser,

        login,

        logout

      }}

    >

      {children}

    </AuthContext.Provider>

  );

};