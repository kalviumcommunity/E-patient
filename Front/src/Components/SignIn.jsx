import React, { useEffect, useState } from "react";
import { auth, provider } from "../../../Backend/Config";
import { signInWithPopup } from "firebase/auth";
import Open from "./Open";

function SignIn() {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const userEmail = result.user.email;
                setValue(userEmail);
                localStorage.setItem("email", userEmail);
            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
            });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setValue(storedEmail);
        }
    }, []); 

    return (
        <div>
            {value ? <Open /> : <button onClick={handleClick}>Sign in with Google</button>}
        </div>
    );
}

export default SignIn;