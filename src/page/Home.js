import React, { useState, useEffect } from 'react';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userC, setUserC] = useState("User");
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log("uid", uid)
                setUserC(user.email)
            } else {
                // User is signed out
                console.log("user is logged out")
            }
        });

    }, [])

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    return(
        <>
            <nav>
                <p>
                    Welcome Home {userC}
                </p>

                <div>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Home