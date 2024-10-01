import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
     // toast.success("User logged in Successfully", {
       // position: "top-center",
     // });
      navigate("/home"); 
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      <style jsx>{`
        .signup-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h2 {
          margin-bottom: 20px;
        }
        .signup-form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .signup-button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        .signup-button:hover {
          background-color: #0056b3;
        }
        p {
          margin-top: 15px;
        }
        p a {
          color: #007bff;
          text-decoration: none;
        }
        p a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
