import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const DjangoUser = async () => {

        try {
            const response = await axios.get("https://sh2pbpd4-8000.inc1.devtunnels.ms/users/?format=json" + user.uid);

            if (response.status === 200) {
                if (response.data.length > 0) {
                    // User exists, redirect to dashboard
                    naviagte('/dashboard');
                } else {
                    // User does not exist, create user
                    const createUserResponse = await axios.post("https://sh2pbpd4-8000.inc1.devtunnels.ms/users/", { uid: user.uid });

                    if (createUserResponse.status === 201) {
                        // User created, redirect to dashboard
                        naviagte('/dashboard');
                    } else {
                        console.log("Error creating user");
                    }
                }
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (user == null) {
            naviagte('/login');
        }
        else {
            DjangoUser();
        }
    }, [user]);

    return <GoogleButton onClick={handleGoogleSignIn} />;
}

export default GoogleLoginButton;