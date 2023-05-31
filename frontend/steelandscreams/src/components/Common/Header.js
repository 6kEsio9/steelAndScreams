import './Header.css';

import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

export const Header = () => {

    const { auth, onLogout } = useAuth();

    let isLogged = auth ? true : false;

    return (
        <header className='navigation'>
            <Link to="/"><h1>Steel And Screams</h1></Link>
            <nav className='navAttributes'>
                {!isLogged ?
                    <div className='navAuth'>
                        <Link to={"/users/login"} className='loginLink'>Login</Link>
                        <Link to={"/users/register"} className='registerLink'>Register</Link>
                    </div>
                    : <div className='loggedNav'>
                        <Link to={"/catalogue"} className='catalogue'>Catalogue</Link>
                        <a className='cart'>Cart</a>
                        <a className='logout' onClick={onLogout}>Logout</a>
                    </div>}
            </nav>
        </header>
    );
};