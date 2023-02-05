import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Dashboard.css";
function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const loading = null
    const user = useSelector(
        (state) => state.user
    )


    useEffect(() => {
        if (loading) return;
        if (!user.userId) return navigate("/");
    }, [user, loading]);


    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as {auth.currentUser?.email}

                <button onClick={() => signOut(auth)}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default Dashboard;