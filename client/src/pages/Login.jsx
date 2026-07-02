import { useState } from "react";

import api from "../api/axios";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async () => {

    try {

      const response = await api.post("/auth/login", {

        email,

        password

      });

      login(response.data.token);

      navigate("/dashboard");

    }

    catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div>

      <h2>Login</h2>

      <input

        placeholder="Email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

      />

      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

      />

      <button onClick={handleLogin}>

        Login

      </button>

    </div>

  );

}

export default Login;