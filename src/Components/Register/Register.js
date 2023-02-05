import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import {
    auth,
    signInWithGoogle,
} from "../../firebase"
import "./Register.css"
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [boolPwd, setBoolPwd] = useState(false);
    const [boolEmail, setBoolEmail] = useState(false);
    const [bool, setBool] = useState(false);
    const [componentEmail, setComponentEmail] = useState(<div></div>);
    const [componentPwd, setComponentPwd] = useState(<div></div>);
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user)

    const register = () => {
        if (!name) alert("Please enter name");
        createUserWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (userId) {
            navigate("/dashBoard");
        }
    }, [userId, loading]);

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
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {!bool ?
                    <button className="register__btn__disabled" disabled>
                        Register
                    </button>
                    :
                    <button className="register__btn" onClick={register}>
                        Register
                    </button>
                }
                <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
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
export default Register;