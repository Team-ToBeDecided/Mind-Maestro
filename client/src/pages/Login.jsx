import { useEffect } from "react";
import GoogleLoginButton from "../components/cards/GoogleLoginButton.jsx";
import { UserAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user != null) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div>
            <h2>Login Page</h2>
            <GoogleLoginButton />
        </div>
    );
};

export default Login;