import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  return (
    <div className="auth">
      <div className="box">
        <h2>Login</h2>

        <input placeholder="Username" onChange={e => setU(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} />

        <button
          onClick={() => {
            if (loginUser(u, p)) nav("/");
            else alert("Wrong data");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
