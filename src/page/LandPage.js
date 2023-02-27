import React, { useState, useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase_setup/firebase";

const LandPage = () => {
    const [userC, setUserC] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUserC(user.email);
                console.log("uid", uid)
            } else {
                // User is signed out
                console.log("user is logged out")
            }
        });

    }, [])
    return(
        <div>
            <h1>Welcome {userC}</h1>
            {userC == null &&
                <div>
                    <a href="/login"><button>Login</button></a>
                    <a href="/signup"><button>signup</button></a>
                </div>
            }
        </div>
    )
}

export default LandPage;