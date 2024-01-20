import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
    const { googleSignIn, user } = UserAuth();
    const naviagte = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            naviagte('/login');
        }
    }, [user, naviagte]);

    return <GoogleButton onClick={handleGoogleSignIn} />;
}

export default GoogleLoginButton;