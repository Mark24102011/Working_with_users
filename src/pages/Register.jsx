import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

export default function Register() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  return (
    <div className="auth">
      <div className="box">
        <h2>Create account</h2>

        <input placeholder="Username" onChange={e => setU(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} />

        <button
          onClick={() => {
            registerUser(u, p);
            alert("Account created");
            nav("/login");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}