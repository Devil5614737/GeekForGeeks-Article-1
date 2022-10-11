import React, { useState } from "react";
import "./app.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

function Login({ setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h4>Login</h4>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <p onClick={() => setShowSignup(true)} style={{ marginTop: 12 }}>
          Don't have an account?{" "}
          <span style={{ cursor: "pointer", fontWeight: "bold" }}>Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
