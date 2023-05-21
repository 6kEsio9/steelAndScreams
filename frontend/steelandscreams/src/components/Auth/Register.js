export const Register = () => {
    return (
        <div class="register-form">
            <h2>Register Form</h2>
            <form>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Your full name..." required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email..." required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Your password..." required />

                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" placeholder="Your address..." required></textarea>

                <label htmlFor="gender">Gender</label>
                <input type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" required />
                <label htmlFor="female">Female</label>

                <label htmlFor="birthdate">Date of Birth</label>
                <input type="date" id="birthdate" name="birthdate" required />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};