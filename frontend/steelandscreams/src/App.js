import './App.css';

import { Footer } from './components/Common/Footer';
import { Header } from './components/Common/Header';

import { Login } from './components/Auth/Login';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Register } from './components/Auth/Register';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <div class="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users/login' element={<Login />} />
            <Route path='/users/register' element={<Register />} />
          </Routes>
        </div>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
