import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [boolPwd, setBoolPwd] = useState(false);
    const [boolEmail, setBoolEmail] = useState(false);
    const [bool, setBool] = useState(false);
    const [componentEmail, setComponentEmail] = useState(<div></div>);
    const [componentPwd, setComponentPwd] = useState(<div></div>);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashBoard");
    }, [user, loading]);

    useEffect(() => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (email.length > 0) {
            if (!regexEmail.test(email)) {
                setBoolEmail(false);
                setComponentEmail(<div style={{ color: 'red' }}>- Mauvais format d'email</div>)
            }
            else {
                setBoolEmail(true);
                setComponentEmail(<div ></div>)
            }
        }
        if (password.length > 0) {
            if (password.length < 8) {
                setBoolPwd(false);
                setComponentPwd(<div style={{ color: 'red' }}>- Mot de passe trop court</div>)
            } else {
                setBoolPwd(true);
                setComponentPwd(<div></div>)
            }
        }

        if (boolEmail && boolPwd) {
            setBool(true)
        } else {
            setBool(false)
        }
    }, [password, email]);

    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="email"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    required
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {!bool ?
                    <button className="login__btn__disabled" disabled>
                        Login
                    </button>
                    :
                    <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
                        Login
                    </button>
                }
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
                <div>
                    {componentEmail}
                </div>
                <div>
                    {componentPwd}
                </div>
            </div>
        </div>
    );

}
