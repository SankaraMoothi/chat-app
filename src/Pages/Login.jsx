import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [err, seterr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err);
      seterr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mass Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            name="password"
            placeholder="PassWord"
          />

          <button>Sign In</button>
          {err && <span>Something Went Wrong...</span>}
        </form>
        <p>
          You Don't Have An Account?<Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
