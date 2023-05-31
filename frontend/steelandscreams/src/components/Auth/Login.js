import { useNavigate } from "react-router-dom";

import "../Auth/Auth.css";

import useAuth from "../../hooks/useAuth";

import { login } from "../../services/authService";

export const Login = () => {

    const navigate = useNavigate();

    const { onLogin } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        login({ email, password })
            .then(res => {
                if(!res.token){
                    return null;
                }
                onLogin(res);
                navigate('/catalogue');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form action="/users/login" onSubmit={onSubmit} method="POST">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your email address..." />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password..."></input>

                <input type="submit" value={"Login"}></input>
            </form>
        </div>
    );
};