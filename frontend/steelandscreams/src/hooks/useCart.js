import { useState, useEffect } from 'react';

import useAuth from '../hooks/useAuth';

export const useCart = () => {

    const { auth, setAuth } = useAuth();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // setAuth((state) => ({
        //     ...state,
        //     cartItems: [cartItems]
        // }))
        setCartItems(auth.cartItems);
    }, [auth.cartItems]);

    return [cartItems, setCartItems];
};

export default useCart;