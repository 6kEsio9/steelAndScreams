import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='navigation'>
            <Link to="/"><h1>Steel And Screams</h1></Link>
            <nav className='navAttributes'>
                <div className='navAuth'>
                    <Link to={"/users/login"} className='loginLink'>Login</Link>
                    <Link to={"/users/register"} className='registerLink'>Register</Link>
                </div>
                {/* <div className='loggedNav'>
                    <a className='catalogue'>Catalogue</a>
                    <a className='cart'>Cart</a>
                    <a className='logout'>Logout</a>
                </div> */}
            </nav>
        </header>
    );
};