import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/loginSlice";
import '../login.css'

export default function Login() {
    const login = useSelector(state => state.login.user);
    const dispatch = useDispatch();

    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addUser({
            name: nameUser,
            email: emailUser
        }));

        setNameUser("");
        setEmailUser("");
    };

    return (
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="text"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                    required
                    placeholder="please, enter your name"
                />

                <input
                    className="login-input"
                    type="email"
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                    required
                    placeholder="please, enter your email"
                />

                <button className="login-btn" type="submit">Login</button>
            </form>
    )
}