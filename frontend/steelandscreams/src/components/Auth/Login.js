export const Login = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your email address..." />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password..."></input>

                <input type="submit" value={"Login"}></input>
            </form>
        </div>
    );
};