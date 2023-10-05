import './Header.css';

import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

export const Header = () => {

    const { auth, onLogout } = useAuth();

    let isLogged = auth ? true : false;
    let isAdmin = isLogged && auth.admin ? true : false;

    return (
        <header className='navigation'>
            <Link to="/"><h1>Steel And Screams</h1></Link>
            <nav className='navAttributes'>
                {isAdmin ? 
                    <Link to={"/item/create"} className='loginLink'>Create</Link> : ""
                }
                {!isLogged ?
                    <div className='navAuth'>
                        <Link to={"/users/login"} className='loginLink'>Login</Link>
                        <Link to={"/users/register"} className='registerLink'>Register</Link>
                    </div>
                    : <div className='loggedNav'>
                        <Link to={"/catalogue"} className='catalogueLink'>Catalogue</Link>
                        <Link to={"/cart"} className='cartLink'>Cart</Link>
                        <Link to={"/"} className='logoutLink' onClick={onLogout}>Logout</Link>
                    </div>}
            </nav>
        </header>
    );
};